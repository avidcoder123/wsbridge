import WebSocket from "ws";

let port = 3145
let ws = new WebSocket("ws://localhost:" + port)
ws.on("open", () => {
    ws.send("Kim Jong Il Mansae")
})