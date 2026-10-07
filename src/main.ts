import express, { Application } from 'express';
import cors from 'cors';
import { Handlers } from './handlers';

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

const handlers = new Handlers();

app.get('/', handlers.getRoot);

// Get Graph
app.get('/graph', handlers.getGraph);

app.get('/data', handlers.getData);

export default app;
