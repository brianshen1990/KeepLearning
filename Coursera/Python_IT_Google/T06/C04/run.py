#!/usr/bin/env python3
import os
import re
import requests

src = "./supplier-data/descriptions/"
url = "http://localhost/fruits/"

def main():

  # read all images
  fileslist = []
  for root, dirs, files in os.walk(src):
    for name in files:
      if str(name).endswith(".txt"):
        fileslist.append(name)

  print(fileslist)

  for file in fileslist:
    with open(src + file, 'r') as f:
      lines = []
      for line in f.readlines():
        lines.append(line)
      
      # print(lines)
      weight = str(lines[1]).strip()
      weight = weight[0:weight.index(" ")]
      data = {
        "name": str(lines[0]).strip(), 
        "weight": int(weight), 
        "description": str(lines[2]).strip(), 
        "image_name": str(file).replace(".txt", ".jpeg")
      }

      r = requests.post(url, json=data)
      print(r)
      print(r.text)

if __name__ == "__main__":
  main()

