#!/bin/bash

filenames="$(find output -type f -name "file*")"
for f in $filenames
do
  echo $f
  file=$(echo "$f" | cut -f 1 -d '.') # "$(basename -- "$f")"
  echo $file
  dot -Tpng "$f" -o "$file.png"
echo $s
done

