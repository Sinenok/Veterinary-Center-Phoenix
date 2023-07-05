import pandas as pd
import csv
import json
xlsx_file = 'Preyskurant_Fenix_Oktyabr_2022.xlsx'
df = pd.read_excel(xlsx_file)
csv_file = 'new.csv'
df.to_csv(csv_file, index=False)



list_service =["Прием врача и амбулаторные процедуры","Хирургические процедуры","Анестезия и интенсивная терапия",
               "Ультразвуковое исследование","Стационар","Общая хирургия","Кастрация и стерилизация","Травматология и ортопедия",
               "Урология, гинекология","Онкология","Репродукция","Родильное отделение и отделение неонатологии","Дерматология","Стоматология",
               "Груминг животных, косметические манипуляции, окрашивание","Лабораторная диагностика","Эутаназия и ритуальные услуги"
               ]
result = {}

filename = 'new.csv'

with open(filename, 'r',encoding='utf-8') as file:
    reader = csv.reader(file)

    services = []
    units = []
    prices = []

    for row in reader:
        if row[0] in list_service:
            curent = row[0]
            result[row[0]] = [services,units,prices]
            continue
        result[curent][0].append(row[0])
        result[curent][1].append(row[1])
        result[curent][2].append(row[2])

with open('data.json', 'w', encoding='utf-8') as file:
    json.dump(result, file, ensure_ascii=False)