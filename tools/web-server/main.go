package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"
)

func main() {
	staticDir := flag.String("static-dir", "./web", "Path to the directory to serve")
	basePath := "/hackrva.org/"
	flag.Parse()

	if _, err := os.Stat(*staticDir); os.IsNotExist(err) {
		panic(fmt.Errorf("static directory does not exist: %w", err))
	}

	fileServer := http.StripPrefix(basePath, http.FileServer(http.Dir(*staticDir)))

	http.Handle(basePath, fileServer)

	fmt.Println("Server running on http://localhost:8080" + basePath)
	http.ListenAndServe(":8080", nil)
}
