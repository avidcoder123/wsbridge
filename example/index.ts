import WebSocket from "ws";

setTimeout(main, 2000)

function main() {
    console.log("Running client...")
    let port = 3333
    let ws = new WebSocket("ws://127.0.0.1:" + port)
    
    //TODO: Find why this is not working
    ws.on("open", () => {
        ws.send("Hello world")
    })

    ws.on("message", msg => {
        console.log(msg)
    })
}
