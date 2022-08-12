export const multiplayer = (io, socket) => {
  const ping = async () => {
    socket.volatile.emit('pong')
  }

  const pong = () => {
    console.log(`pong ${Date.now()}`)
  }

  socket.on('ping', ping)
  socket.on('pong', pong)
}
