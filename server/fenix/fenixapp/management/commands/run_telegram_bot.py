from django.core.management.base import BaseCommand
from fenixapp.workfile.bottg import bot

class Command(BaseCommand):
    help = 'Запустить Telegram бота'

    def handle(self, *args, **options):
        bot.polling(none_stop=True)