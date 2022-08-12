import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { ping } from './ping.js'
import { APP_PORT, CORS_ORIGIN } from '../config.js'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: CORS_ORIGIN,
    credentials: true,
  },
  cookie: true,
})

const onConnection = (socket) => {
  console.log('hello', socket.id)
  ping(io, socket)
}

io.on('connect', onConnection)

httpServer.listen(APP_PORT)
