#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm i imgbb-uploader
echo "[INFO] If this error, try installing with --dev"
echo ""
echo "[Command] npm install --dev"
echo "[INFO] That's a example commands with --dev."
echo "[INFO] Then install got"
echo "[Command] npm install got"
echo ""
npm install
npm i got

echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
