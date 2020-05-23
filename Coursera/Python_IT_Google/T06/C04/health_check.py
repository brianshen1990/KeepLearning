#!/usr/bin/env python3

import emails
import os
import shutil
import psutil
import subprocess
import time

def check_disk_usage():
  du = shutil.disk_usage("/")
  free = du.free /  du.total * 100
  return free > 20

def check_cpu_usage():
  usage = psutil.cpu_percent(2)
  return usage < 80

def check_hostname_resolve():
  res = subprocess.run(["nslookup", "localhost"], capture_output=True)
  ips = res.stdout.decode()
  print(ips)
  return "127.0.0.1" in ips

def check_mem_usage():
  res = psutil.virtual_memory()
  print(res.available)
  return res.available > 500 * 1024 * 1024

def check_all():
  check_list = [
    { "func": check_disk_usage, "message": "Error - Available disk space is less than 20%" },
    { "func": check_cpu_usage, "message": "Error - CPU usage is over 80%"  },
    # { "func": check_hostname_resolve, "message": "Error - localhost cannot be resolved to 127.0.0.1"  },
    { "func": check_mem_usage, "message": "Error - Available memory is less than 500MB"  },
  ]
  for item in check_list:
    if item["func"]():
      pass
    else:
      print(item["message"])
      # email 
      sender = "automation@example.com"
      receiver = "{}@example.com".format(os.environ.get('USER'))
      subject = item["message"]
      body = "Please check your system and resolve the issue as soon as possible."

      message = emails.generate(sender, receiver, subject, body)
      emails.send(message)
      print(message)

if __name__ == "__main__":
  while(True):
    check_all()
    time.sleep(60)