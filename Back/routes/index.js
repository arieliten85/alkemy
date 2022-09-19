const express = require("express");
const router = express.Router();

//const usersRouter = require("../controllers/usersControllers");
const registrosControllers = require("../controllers/registrosControllers");

router.use("/registros", registrosControllers);
//router.use("/users", usersRouter);

module.exports = router;
