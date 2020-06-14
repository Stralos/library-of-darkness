const express = require("express");
const morgan = require("morgan");

const port = 3010;
const app = express();

app.use(morgan("combined"));
app.get("/greet", (req, res) => {
  res.send({ message: "Hello world from the server!" });
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
