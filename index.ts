import Websocket, { WebSocketServer } from 'ws';

const ws = new WebSocketServer({
    port: 3145
})

ws.on("message", msg => {
    console.log(msg)
})