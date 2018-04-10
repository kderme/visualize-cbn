#!/bin/bash

prefix="file"
output="output"

topng () {
  path=$1
  filenames="$(find $path -type f -name "$prefix*")"
  for f in $filenames
  do
    file=$(echo "$f" | cut -f 1 -d '.') 
    echo $file
    dot -Tpng "$f" -o "$file.png"
  done
}

mkdir -p $output
examples="$(ls examples)"
for ex in $examples
do
  echo $examples
  folder=$(echo "$ex" | cut -f 1 -d '.');
  mkdir -p $output/$folder
  stack exec -- visualize-cbn -i examples/$ex --javascript $output/$folder/out.js --graph $output/$folder/$prefix
  topng "$output/$folder"
done
