.PHONY: dev build clean install lint format test tail-log

dev:
	@SHOREMAN_COLORS=always scripts/shoreman.sh | tee dev.log

build:
	@cd mobile && npm install && npx expo export
	@cd backend && mkdir -p bin && go build -o bin/backend ./cmd

clean:
	@rm -rf dev.log
	@rm -rf backend/bin
	@rm -rf mobile/dist
	@rm -rf mobile/node_modules/

install:
	@cd mobile && npm install
	@cd backend && go mod tidy

lint:
	@cd mobile && npm run lint
	@cd backend && go vet ./...

format:
	@cd mobile && npm run lint -- --fix
	@cd backend && go fmt ./...

test:
	@cd mobile && npm test
	@cd backend && go test ./...

tail-log:
	@tail -n 100 dev.log | perl -pe 's/\e\[[0-9;]*m(?:\e\[K)?//g';
