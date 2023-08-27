from django.shortcuts import render
from django.http import HttpResponse
from fenixapp.workfile.parse import *
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import telebot

def index(request):
    return HttpResponse("Hello METANIT.COM")


def price_list(request):
    result = parse('fenixapp/workfile/Preyskurant_Fenix_Oktyabr_2022.xlsx')
    return JsonResponse(result)

@api_view(['POST'])
def form_back_view(request):
    token = "6021451260:AAFfVwFeCGlLVLRLEU1paq9_DWg1J3JKGxs"
    if request.method == 'POST':
        record_name = request.data.get('recordName', '')
        record_phone = request.data.get('recordPhone', '')

        bot = telebot.TeleBot(token)
        message = f'Получены новые данные:\nИмя: {record_name}\nТелефон: {record_phone}'

        bot.send_message("5150739534", message)

        return Response({'message': 'Данные получены'}, status=status.HTTP_200_OK)
