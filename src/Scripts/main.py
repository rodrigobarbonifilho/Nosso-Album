from os import listdir
from json import dump

images_list = []
for i_image_file, image_file in enumerate(listdir('./..//public')):
    images_list.append(image_file)

with open("./src/images.json", "w") as file:
    dump({"images": images_list}, file, ensure_ascii=True, indent=4)
