import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import logger from './config/winston';
import { addRouters } from './routes/app-router';
import { addSocketEvents } from './socket-events/app-socket-events';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

addRouters(app);
addSocketEvents(io);

server.listen(process.env.PORT, () => {
  logger.debug(`Server be jammin' on port ${process.env.PORT}!`);
});

export default app;
