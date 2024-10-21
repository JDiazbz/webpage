const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

// Create a new connection
io.on('connection', (socket) => {
  console.log('New client connected');

  // Handle new message
  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    io.emit('message', message);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server started on port 3000');
});