const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");

const port = 3000;
const app = express();

app.use(morgan("combined"));
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:3010",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/",
    },
  })
);
app.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:3020",
    changeOrigin: true,
  })
);
app.listen(port, () =>
  console.log(
    `Proxy server started and listening at http://localhost:${port}`
  )
);

