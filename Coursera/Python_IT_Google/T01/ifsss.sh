#!/bin/bash

outfile=oldFiles.txt
> $outfile
files=$(grep " jane " ../data/list.txt | cut -d ' ' -f 3)

for file in $files; do
  if test -e "~$file"; then 
    echo $file
    echo $file >> $outfile; 
  fi
done


