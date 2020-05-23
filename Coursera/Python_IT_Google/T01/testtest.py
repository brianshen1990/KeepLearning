#!/usr/bin/env python3
import os 
import sys
import subprocess

BASEPATH = "/home/student-04-59327def21d0"

with open(sys.argv[1]) as f:
  for item in f.readlines():
    old_file = item.strip()
    new_file = old_file.replace("jane", "jdoe")
    # print(BASEPATH + old_file + "," + BASEPATH + new_file)
    subprocess.run(["mv", BASEPATH + old_file, BASEPATH + new_file ])
  f.close()
# string.replace(old_substring, new_substring)