const app = require('express')();
const http = require('http').Server(app)
const io = require('socket.io')(http);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('a user disconnected');
  })
});

io.on('connection', (socket) => {
socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  });
});

http.listen(3002, () => {
  console.log("I'm listening on 3002");
});
