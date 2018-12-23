const addDisconnectEvents = (socket) => {
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
};

export { addDisconnectEvents };
