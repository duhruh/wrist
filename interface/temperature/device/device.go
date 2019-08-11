package device
import "io/ioutil"

type Device interface {
	Read() string
}
type device struct {
	file string
}

func New(file string) Device {
	return device{
		file: file,
	}
}

func (d device) Read() string {
	bytes, err := ioutil.ReadFile(d.file)

	if err != nil {
		panic(err)
	}

	return string(bytes)
}

