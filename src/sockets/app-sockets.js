const addSockets = (io) => {
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
};

export { addSockets };
