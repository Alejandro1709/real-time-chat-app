import express from 'express';
import { Server as SocketServer } from 'socket.io';
import { NODE_ENV, PORT } from './config.js';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const server = http.createServer(app);

const io = new SocketServer(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

server.listen(PORT, () =>
  console.log(`Server is up and running on port *:${PORT}`)
);
