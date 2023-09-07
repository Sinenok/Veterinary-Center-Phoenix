import openpyxl
import json

def spec_parse():
    workbook = openpyxl.load_workbook('media/spec.xlsx')
    sheet = workbook['Sheet1']
    data_list = []
    id = 0
    for row in sheet.iter_rows(values_only=True):
        name, description, photo = row[:3]
        specialist = {
            'id': id,
            'name': name,
            'description': description,
            'photo': photo,
        }
        id += 1

        data_list.append(specialist)

    with open('spec.json', 'w', encoding='utf-8') as file:
        json.dump(data_list, file, ensure_ascii=False)

    workbook.close()

