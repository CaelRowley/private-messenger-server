import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import { addRouters } from './routes/app-router';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

addRouters(app);

io.on('connection', socket => {
  console.log('Client connected');

  socket.on('emit message', (message) => {
    console.log(`Emitting message: "${message}" to all clients`);
    io.sockets.emit('emit message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server be jammin' on port ${process.env.PORT}!`);
});
