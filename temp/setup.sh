#!/bin/bash
echo "dtoverlay=w1-gpio,gpiopin=5" >> /boot/config.txt

echo 'w1-gpio' >> /etc/modules
echo 'w1-therm' >> /etc/modules


# cat /sys/bus/w1/devices/28-*/w1_slave