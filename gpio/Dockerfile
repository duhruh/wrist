FROM raspbian/stretch

# Install wiringPi
RUN apt-get update && apt-get install -y build-essential sudo git
RUN git clone git://git.drogon.net/wiringPi
RUN cd wiringPi && ./build

# Define working directory
WORKDIR /data

# Define default command
CMD ["gpio"]
