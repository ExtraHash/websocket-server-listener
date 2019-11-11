import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 41920 });

wss.on('connection', function connection(ws) {


  ws.on('message', function incoming(message) {
    console.log(message);
  });

});
