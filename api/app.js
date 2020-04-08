/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is ready at http://localhost:${port}`));
