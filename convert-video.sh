#!/usr/bin/bash

INPUT_DIR=$1
OUTPUT_DIR=$2

for file in "$INPUT_DIR"/*; do
    filename=$(basename -- "$file")
    ffmpeg -y -i "$file" -an -b:v 0 -crf 25 -s 960x540 "$OUTPUT_DIR/${filename%.*}.mp4"
    ffmpeg -y -i "$file" -an -codec:v vp9 -b:v 0 -crf 30 -s 960x540 "$OUTPUT_DIR/${filename%.*}.webm"
done
