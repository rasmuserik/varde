
.PHONY: dev clean

all: dist/main.js

dev:
	ls src/*.js dist/*.html | entr make

dist/main.js: node_modules/ipfs-http-client/dist/index.js src/index.js
	cat $^ > $@

clean:
	rm -fv dist/main.js
