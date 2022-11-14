import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { NODE_ENV, PORT } from './config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.listen(PORT, () =>
  console.log(`Server is up and running on port *:${PORT}`)
);
