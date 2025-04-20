#!/bin/bash

for file in `ls -1 *.png`
do
convert $file -resize 600x small/$file
done
