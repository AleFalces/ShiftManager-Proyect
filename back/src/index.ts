const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const server = express();

server.listen(PORT, () => {
  console.log(`server listen in port ${PORT}`);
});
