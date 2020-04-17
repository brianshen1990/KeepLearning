import sys, traceback
from inspect import currentframe, getframeinfo

def errorFunction():
  kk()

def main():
  try:
    errorFunction()
  except Exception as e:
    print(e)
    track = traceback.format_exc()
    print(track)

if __name__ == '__main__':
  main()