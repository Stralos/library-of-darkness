import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

const port = 3010;
const app = express();

app.use(helmet());
app.use(morgan('combined'));
app.get('/greet', (_, res) => {
  res.send({ message: 'Hello world from the server' });
});
app.listen(port, () =>
  console.log(
    `Library of darkness server started and listening at http://localhost:${port}`
  )
);
