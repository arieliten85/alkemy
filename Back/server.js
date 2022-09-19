const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const volleyball = require("volleyball");
const routes = require("./routes");
require("./config/db");

//USE
app.use(volleyball);
app.use(express.json());
app.use(cors());
//app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", routes);

app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto 4000`);
});
