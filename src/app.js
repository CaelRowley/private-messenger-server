import express from 'express';
import { healthcheckRouter } from './routes/healthcheck';
import http from 'http';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(healthcheckRouter);

io.on('connection', socket => {
  console.log('User connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(process.env.PORT, () => {
  console.log(`Server be jammin' on ${process.env.PORT}!`);
});
