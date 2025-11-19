import WebSocket, { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });


wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
    ws.on('message', function message(data) {
        console.log(data.toString());
        wss.clients.forEach(client => {
      if (client.readyState === 1) {   // OPEN
        client.send(`Broadcast: ${data.toString()}`);
      }
    });
    });
}); 