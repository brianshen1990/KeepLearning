#!/usr/bin/env python3

import os
import csv
import re
import operator

def main():

  error_dic = {}
  user_dict = {}

  with open("./syslog.log") as f:
    for line in f.readlines():
      if "ticky: INFO" in line:
        result = re.search(r"ticky: INFO (.*) \(([a-zA-Z.]+)\)$", line)
        if not result:
          print("info not match: " + line)
          continue
        result = result.groups()
        user = result[1]
        
        user_dict[user] = user_dict.get(user, {})
        user_dict[user]["INFO"] = user_dict[user].get("INFO", 0)
        user_dict[user]["INFO"] += 1
      if "ticky: ERROR" in line:
        result = re.search(r"ticky: ERROR ([\w ']*) \(([a-zA-Z.]+)\)$", line)
        if not result:
          print("error not match: " + line)
          continue
        result = result.groups()
        error = result[0]
        user = result[1]

        error_dic[error] = error_dic.get(error, 0)
        error_dic[error] += 1

        user_dict[user] = user_dict.get(user, {})
        user_dict[user]["ERROR"] = user_dict[user].get("ERROR", 0)
        user_dict[user]["ERROR"] += 1

    f.close()

  # print(error_dic)
  error_list = sorted(error_dic.items(), key=operator.itemgetter(1), reverse=True)
  # print(error_list)

  # print(user_dict)
  user_list = sorted(user_dict)
  # print(user_list)

  # error_message.csv
  with open("error_message.csv", 'w') as f:
    error_csv = csv.DictWriter(f, fieldnames=["Error", "Count"])
    error_csv.writeheader()
    for item in error_list:
      error_csv.writerow({
        "Error": item[0],
        "Count": item[1]
      })
    f.close()
  # user_statistics.csv
  with open("user_statistics.csv", 'w') as f:
    user_csv = csv.DictWriter(f, fieldnames=["Username", "INFO", "ERROR"])
    user_csv.writeheader()
    for item in user_list:
      user_csv.writerow({
        "Username": item, 
        "INFO": user_dict[item].get("INFO", 0), 
        "ERROR" : user_dict[item].get("ERROR", 0), 
      })
    f.close()


main()