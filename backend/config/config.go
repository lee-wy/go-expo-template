package config

import (
	"os"
)

type Config struct {
	Port           string
	Environment    string
	AllowedOrigins string
}

func New() *Config {
	return &Config{
		Port:           getEnv("PORT", "8080"),
		Environment:    getEnv("ENVIRONMENT", "dev"),
		AllowedOrigins: getEnv("ALLOWED_ORIGINS", "http://localhost:8081"),
	}
}

func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}
