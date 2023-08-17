from django.shortcuts import render
from django.http import HttpResponse
from fenixapp.workfile.parse import *
from django.http import JsonResponse

def index(request):
    return HttpResponse("Hello METANIT.COM")


def price_list(request):
    result = parse('fenixapp/workfile/Preyskurant_Fenix_Oktyabr_2022.xlsx')
    return JsonResponse(result)

