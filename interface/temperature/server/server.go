package server
import (
	"log"
	"net"

	"github.com/duhruh/wrist/temperature/device"
	"github.com/duhruh/wrist/temperature/server/proto"
	"google.golang.org/grpc"
)

type temperatureServer struct {
	device device.Device
}

func New(device device.Device) proto.TemperatureServiceServer {
	return &temperatureServer{device: device}
}

func (t *temperatureServer) StreamReadings(req *proto.ReadingsRequest, stream proto.TemperatureService_StreamReadingsServer) error {
	for {
		m := &proto.Reading{Message: t.device.Read()}
		if err := stream.Send(m); err != nil {
			return err
		}
	}
	return nil
}

// StartStandAloneServer - COMMAND
func StartStandAloneServer(port string, temp proto.TemperatureServiceServer) {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()
	proto.RegisterTemperatureServiceServer(grpcServer, temp)

	println("going to start on " + port)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

