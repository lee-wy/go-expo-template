# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Full-stack application with Expo/React Native mobile app and Go backend. Uses Expo for mobile development and chi router for Go HTTP server.

## Architecture

- **Mobile**: Expo/React Native app with TypeScript in `mobile/`
- **Backend**: Go HTTP server using chi router in `backend/`
- **Process Management**: Procfile defines mobile/backend services, managed by shoreman script
- **Development Server**: Backend runs on port 8080, mobile app via Expo dev server on `make dev`
- **Auto-reload**: Both mobile and backend automatically reload on file changes

## Development Commands

- `make dev` - Starts development servers (backend on port 8080, mobile via Expo dev server)
- `make build` - Build production application (mobile via expo export and backend in backend/bin/)
- `make install` - Install dependencies (npm install + go mod tidy)
- `make lint` - Run linters (expo lint for mobile, go vet for backend)
- `make format` - Format mobile (expo lint --fix) and backend (go fmt) code
- `make clean` - Clean build artifacts
- `make test` - Run tests for both mobile and backend (go test)
- `make tail-log` - Reads the current log file (last 100 lines)

**IMPORTANT:** Use the `make tail-log` command to read the log file.
