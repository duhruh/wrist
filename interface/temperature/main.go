package main
//go:generate protoc server/proto/temperature.proto --go_out=plugins=grpc:.

import (
	"flag"

	"github.com/duhruh/wrist/temperature/device"
	"github.com/duhruh/wrist/temperature/server"
)

const (
	defaultDevice = "/sys/bus/w1/devices/28-0000071e1cf6/w1_slave"
	defaultPort   = ":5000"
)

var (
	file = flag.String("device", defaultDevice, "the temp device to monitor")
	port = flag.String("port", defaultPort, "the port")
)

func main() {
	flag.Parse()

	d := device.New(*file)

	temp := server.New(d)

	server.StartStandAloneServer(*port, temp)
}

