import telebot
import os
from django.conf import settings
import requests
from django.http import HttpRequest
from fenixapp.workfile.parse import *
from fenixapp.workfile.specparse import *

token = "6021451260:AAFfVwFeCGlLVLRLEU1paq9_DWg1J3JKGxs"
bot = telebot.TeleBot(token)
admin_user_id1 = 5150739534
admin_user_id2 = 408007566
@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    bot.reply_to(message, "Команды:\n Для загрузки фото на сервер, просто отправьте фото и получите ссылку \nОтправь слово `price` с прикрепленным документом цен для обновления цен \nОтправь слово `spec`, с прикрепленным документом специалистов, что бы обновить специалистов")



@bot.message_handler(commands=['photo'])
def handle_photo_command(message):
    bot.send_message(message.chat.id, "Пожалуйста, отправьте мне фотографию.")

@bot.message_handler(content_types=['photo'])
def handle_photo(message):
    user_id = message.from_user.id
    if message.from_user.id not in [admin_user_id1,admin_user_id2]:
        bot.send_message(message.chat.id, "У вас нет прав на выполнение этой команды.")
        return

    chat_id = message.chat.id
    message_id = message.message_id

    file_info = bot.get_file(message.photo[-1].file_id)
    file_path = file_info.file_path

    file_url = f'https://api.telegram.org/file/bot{token}/{file_path}'

    save_path = os.path.join(settings.MEDIA_ROOT, f'file_{user_id}_{message_id}.jpg')

    response = requests.get(file_url)
    if response.status_code == 200:
        with open(save_path, 'wb') as file:
            file.write(response.content)

        photo_url = os.path.join(settings.MEDIA_URL, f'file_{user_id}_{message_id}.jpg')

        request = HttpRequest()
        request.META['HTTP_HOST'] = '127.0.0.1:8000'

        absolute_url = request.build_absolute_uri(photo_url).replace("http://127.0.0.1:8000","https://vetfenix.ru")

        bot.send_message(chat_id, f"Фото сохранено. URL фото: \n{absolute_url}")
    else:
        bot.send_message(chat_id, "Ошибка при скачивании фото.")

@bot.message_handler(content_types=['document'])
def handle_document(message):
    chat_id = message.chat.id

    if message.from_user.id not in [admin_user_id1,admin_user_id2]:
        bot.send_message(chat_id, "У вас нет прав на выполнение этой команды.")
        return

    file_info = bot.get_file(message.document.file_id)
    file_path = file_info.file_path

    try:
        if 'price' in message.caption:
            download_path = os.path.join(settings.MEDIA_ROOT, 'price.xlsx')
            response = requests.get(f'https://api.telegram.org/file/bot{token}/{file_path}')
            if response.status_code == 200:
                with open(download_path, 'wb') as file:
                    file.write(response.content)
                parse_price()
                bot.send_message(chat_id, "Новый прайс-лист успешно загружен.")
                bot.send_message(chat_id, "Новые цены установлены.")
            else:
                bot.send_message(chat_id, "Ошибка при загрузке нового прайс-листа.")
        elif 'spec' in message.caption:
            download_path = os.path.join(settings.MEDIA_ROOT, 'spec.xlsx')
            response = requests.get(f'https://api.telegram.org/file/bot{token}/{file_path}')
            if response.status_code == 200:
                with open(download_path, 'wb') as file:
                    file.write(response.content)
                spec_parse()
                bot.send_message(chat_id, "Новый файл spec.xlsx успешно загружен.")
                bot.send_message(chat_id, "Специалисты обновлены.")
            else:
                bot.send_message(chat_id, "Ошибка при загрузке нового файла spec.xlsx.")
    except Exception as e:
        print(e)
        bot.send_message(chat_id, "Ошибка! возможно вы не указали название файла?\n подпишите price или spec")
