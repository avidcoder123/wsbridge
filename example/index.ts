import WebSocket from "ws";

let port = 1941
let ws = new WebSocket("ws://localhost:" + port)
ws.on("open", () => {
    console.log("Connected")
})