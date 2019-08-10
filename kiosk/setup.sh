#!/bin/bash

sudo apt-get purge wolfram-engine scratch scratch2 nuscratch sonic-pi idle3 -y
sudo apt-get purge smartsim java-common minecraft-pi libreoffice* -y

sudo apt-get clean
sudo apt-get autoremove -y

sudo apt-get update
sudo apt-get upgrade


sudo apt-get install xdotool unclutter sed



# 3 Boot Options -> B1 Desktop / CLI -> B4 Desktop Autologin
sudo raspi-config




# echo $DISPLAY >> PREVIOUS_DISPLAY

#sudo systemctl enable kiosk.service
#sudo systemctl start kiosk.service