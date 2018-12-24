export const addMessageEvents = (io, socket) => {
  socket.on('emit message', (message) => {
    console.log(`Emitting message: "${message}" to all clients`);
    io.sockets.emit('emit message', message);
  });
};
