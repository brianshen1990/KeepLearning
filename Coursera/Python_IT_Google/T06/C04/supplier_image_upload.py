#!/usr/bin/env python3
import os
import re
import requests

src = "./supplier-data/images/"
url = "http://localhost/upload/"

def main():

  # read all images
  fileslist = []
  for root, dirs, files in os.walk(src):
    for name in files:
      if str(name).endswith(".jpeg"):
        fileslist.append(name)

  print(fileslist)

  for file in fileslist:
    with open(src + file, 'rb') as f:
      r = requests.post(url, files={'file': f})
      print(r)
      print(r.text)

if __name__ == "__main__":
  main()

# [ip]/media/images/
