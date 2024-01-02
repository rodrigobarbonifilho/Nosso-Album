from os import listdir
from json import dump

dict = {}
for i_image_file, image_file in enumerate(listdir('./..//public')):
    dict[f"{i_image_file:3}".replace(" ", "0")] = image_file

with open("./src/images.json", "w") as file:
    dump(dict, file, ensure_ascii=True, indent=4)
