#!/usr/bin/env python3
from PIL import Image
import os
import re

src = "./supplier-data/images/"
dst = "./supplier-data/images/"

def main():

  # read all images
  fileslist = []
  for root, dirs, files in os.walk(src):
    for name in files:
      if str(name).endswith(".tiff"):
        fileslist.append(name)

  # print(fileslist)

  for image in fileslist:
    im = Image.open(src + image)
    final_name = re.sub(r".tiff$", ".jpeg", image)
    final_name = dst + final_name
    print(src + image + " => " + final_name)
    im.resize((600,400)).convert("RGB").save(final_name, 'jpeg')
    
if __name__ == "__main__":
  main()


