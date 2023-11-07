rm -rf build
fuser -k 3333/tcp
tsc
node build/index.js &
node build/example/index.js