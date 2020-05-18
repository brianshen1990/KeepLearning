#!/usr/bin/env python
import subprocess
from multiprocessing import Pool, cpu_count
import os

# src = "/data/prod/"
# dest = "/data/prod_backup/"
# subprocess.call(["rsync", "-arq", src, dest])
# logfile = open("./dirlog.log", "w")

src = "/home/student-00-1c6a0eb87291/data/prod/"
dest = "/home/student-00-1c6a0eb87291/data/prod_backup/"

def run(task):
  # Do something with task here
  subprocess.call(["rsync", "-aq", task, str(task).replace("/prod/", "/prod_backup/") ])
  print(task + " => " + str(task).replace("/prod/", "/prod_backup/"))

if __name__ == "__main__":
  src = "/home/student-00-1c6a0eb87291/data/prod/"
  fileslist = []
  dirlist = []
  for root, dirs, files in os.walk(src):
    for name in files:
      fileslist.append(os.path.join(root, name))

  # print(fileslist)

  # copy dir structure
  subprocess.call(["rsync","-a", "--include='*/'", "--exclude='*'", src, dest])
  # rsync -av -f'+ */' -f'- *' /home/student-00-1c6a0eb87291/data/prod/ /home/student-00-1c6a0eb87291/data/prod_backup/
  # rsync -a --include='*/' --exclude='*' /home/student-00-1c6a0eb87291/data/prod/ /home/student-00-1c6a0eb87291/data/prod_backup/

  tasks = fileslist
  # Create a pool of specific number of CPUs
  p = Pool(cpu_count())
  # Start each task within the pool
  p.map(run, tasks)

  # logfile.close()
