import serial
ser = serial.Serial('/dev/ttyACM0', 9600,timeout=1)
while 1:
    if(ser.in_waiting >0):
        line = ser.readline()