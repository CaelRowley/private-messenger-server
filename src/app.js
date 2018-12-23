import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import { addRouters } from './routes/app-router';
import { addSockets } from './sockets/app-sockets';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

addRouters(app);
addSockets(io);

server.listen(process.env.PORT, () => {
  console.log(`Server be jammin' on port ${process.env.PORT}!`);
});
