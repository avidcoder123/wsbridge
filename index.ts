import Websocket, { WebSocketServer } from 'ws';

console.log("Running server...")

const ws = new WebSocketServer({
    port: 3333
})

ws.on("connection", () => {
    console.log("Connected")
})

ws.on("message", msg => {
    console.log(msg)
})