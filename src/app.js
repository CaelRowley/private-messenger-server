import express from 'express';
import { healthcheckRouter } from './routes/healthcheck';
import http from 'http';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(healthcheckRouter);

io.on('connection', socket => {
  console.log('Client connected');

  socket.on('change color', (color) => {
    console.log('Color Changed to: ', color);
    io.sockets.emit('change color', color);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server be jammin' on ${process.env.PORT}!`);
});
