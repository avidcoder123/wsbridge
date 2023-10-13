import WebSocket from "ws";

let port = 3145
let ws = new WebSocket("ws://localhost:" + port)

//TODO: FInd why this is not working
ws.on("open", () => {
    ws.send("Kim Jong Il Mansae")
})