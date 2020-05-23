#!/usr/bin/env python3

import re
import os
import requests


FOLDER = "/data/feedback/"
URL = "http://104.154.253.146/feedback/"

dd = {
  "title": "Experienced salespeople",
  "name": "Alex H.", 
  "date": "2020-02-02",
  "feedback": "It was great to talk to the salespeople in the team, they understood my needs and were able to guide me in the right direction"
}

def main():

  # read all images
  fileslist = []
  for root, dirs, files in os.walk(FOLDER):
    for name in files:
      if ".txt" in name:
        fileslist.append(name)
  
  # print(fileslist)

  for item in fileslist:
    with open(FOLDER + item) as f:
      # print(FOLDER + item)
      data = {
        "title": "",
        "name": "", 
        "date": "",
        "feedback": ""
      }
      lines = [] 
      for line in f.readlines():
        lines.append(line)
      # print(lines)
      data["title"] = lines[0].strip()
      data["name"] = lines[1].strip()
      data["date"] = lines[2].strip()
      data["feedback"] = lines[3].strip()
      print(data)
      res = requests.post(URL, json=data)
      print(res)
      print(res.text)
      f.close()
  
  
if __name__ == "__main__":
  main()

