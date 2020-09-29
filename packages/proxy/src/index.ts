import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { createProxyMiddleware } from 'http-proxy-middleware';

const port = 3000;
const app = express();

app.use(morgan('combined'));
app.use(helmet());

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:3010',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/',
    },
  })
);
app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3020',
    changeOrigin: true,
  })
);
app.listen(port, () =>
  console.log(`Proxy server started and listening at http://localhost:${port}`)
);
