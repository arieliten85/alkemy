const express = require("express");
const router = express.Router();

const { Registro } = require("../model/index");

router.get("/", (req, res) => {
  Registro.find().then((result) => res.send(result));
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  Registro.create(req.body)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Registro.findById({ _id: req.params.id }).then((registro) =>
    res.send(registro)
  );
});

router.put("/update/:id", (req, res) => {
  console.log("BODY", req.body);

  Registro.findByIdAndUpdate({ _id: req.params.id }, req.body).then((result) =>
    res.send(result)
  );
});

router.delete("/delete/:id", (req, res) => {
  Registro.findByIdAndRemove({ _id: req.params.id }).then((result) =>
    res.send(result)
  );
});

module.exports = router;
