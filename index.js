const express = require("express");
const routerUser = require("./routes/itemsRoute");
const routerFact = require("./routes/factsRoute");
const cors = require("cors");
const app = express();
const connect = require("./database/db");

app.use(cors());
app.use(express.json());
app.use(routerUser, routerFact);

connect();

app.listen(1001, () => {
  console.log("port 1001");
});
