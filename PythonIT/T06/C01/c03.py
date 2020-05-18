#!/usr/bin/env python3
from PIL import Image
import os
import re

src = "/home/student-03-52e0ac4bfd5c/images/"
dst = "/opt/icons/"

def main():


  # read all images
  fileslist = []
  for root, dirs, files in os.walk(src):
    for name in files:
      if "48dp" in name:
        fileslist.append(name)

  # print(fileslist)

  for image in fileslist:
    im = Image.open(src + image)
    #final_name = re.sub(r".tiff$", ".jpeg", image)
    final_name = dst + image
    print(src + image + " => " + final_name)
    im.rotate(90).resize((128,128)).convert("RGB").save(final_name, 'jpeg')
    #im.convert("RGB").save(final_name, 'jpeg')

if __name__ == "__main__":
  main()







# im = Image.open("ikea.png")
# im.rotate(45).show()

# im = Image("example.jpg")
# new_im = im.resize((640,480))
# new_im.save("example_resized.jpg")

# im = Image("example.jpg")
# new_im = im.rotate(90)
# new_im.save("example_rotated.jpg")

# im = Image("example.jpg")
# im.rotate(180).resize((640,480)).save("flipped_and_resized.jpg")