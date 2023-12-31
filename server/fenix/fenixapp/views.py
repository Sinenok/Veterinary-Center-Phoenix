from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import telebot
import os


def index(request):
    return HttpResponse("Hello")


def price_list(request):
    import json
    with open("data.json", 'r',encoding='utf-8') as file:
        result = json.load(file)
    return JsonResponse(result)


def specialists(request):
    import json
    with open("spec.json", 'r', encoding='utf-8') as file:
        result = json.load(file)
    return JsonResponse(result, safe=False)

@api_view(['POST'])
def form_back_view(request):
    token = "6021451260:AAFfVwFeCGlLVLRLEU1paq9_DWg1J3JKGxs"
    if request.method == 'POST':
        record_name = request.data.get('recordName', '')
        record_phone = request.data.get('recordPhone', '')
        record_com = request.data.get('recordComent', '-')

        bot = telebot.TeleBot(token)
        message = f'Получены новые данные:\nИмя: {record_name}\nТелефон: {record_phone}\nКомментарий: {record_com}'

        bot.send_message("-1001931378235", message)

        return Response({'message': 'Данные получены'}, status=status.HTTP_200_OK)
