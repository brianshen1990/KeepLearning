#!/usr/bin/env python3
import csv
import datetime
import requests

FILE_URL = "http://marga.com.ar/employees-with-date.csv"


def get_start_date():
  """Interactively get the start date to query for."""

  print()
  print('Getting the first start date to query for.')
  print()
  print('The date must be greater than Jan 1st, 2018')
  year = int(input('Enter a value for the year: '))
  month = int(input('Enter a value for the month: '))
  day = int(input('Enter a value for the day: '))
  print()

  return datetime.datetime(year, month, day)


def get_file_lines(url):
  """Returns the lines contained in the file at the given URL"""

  # Download the file over the internet
  response = requests.get(url, stream=True)

  # Decode all lines into strings
  lines = []
  for line in response.iter_lines():
    lines.append(line.decode("UTF-8"))
  return lines


def calculate_all_date(start_date):
  data = get_file_lines(FILE_URL)
  reader = csv.reader(data[1:])
  cur_date = datetime.datetime.today()

  res = {  }

  for row in reader:
    row_date = datetime.datetime.strptime(row[3], '%Y-%m-%d')
    name = "{} {}".format(row[0], row[1])

    if row_date < start_date:
      continue

    if row_date <= cur_date:
      res[row_date] = res.get(row_date, [])
      res[row_date].append("{} {}".format(row[0], row[1]))
  return res
    

def list_newer(start_date):
  res = calculate_all_date(start_date)
  for item in sorted(res.keys()):
    print("Started on {}: {}".format(item.strftime("%b %d, %Y"), res[item]))

def main():
  start_date = get_start_date()
  list_newer(start_date)


if __name__ == "__main__":
  main()
