import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 41920 });

wss.on('listening', function listening() {
  console.log('Server listening on port 41920')
})

wss.on('connection', function connection(ws) {


  ws.on('message', function incoming(message) {
    console.log(message);
  });

});
