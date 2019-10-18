const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://teste:teste@cluster0-ezukv.mongodb.net/mysite?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use(require("./routes"));

const port = normalizaPort(process.env.PORT || "3333");

function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}
server.listen(port, function() {
  console.log(`app listening on http://localhost:${port}`);
});