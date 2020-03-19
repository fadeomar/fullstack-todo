import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (erq, res) => {
  res.send({message : 'welcome to Todo FullStack'})
})
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is ready at http://localhost:${port}`));