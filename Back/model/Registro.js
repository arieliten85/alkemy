const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegistroSchema = new Schema({
  concepto: {
    type: String,
  },
  monto: {
    type: String,
  },
  tipo: {
    type: String,
    
  },
});

const registro = mongoose.model("registro", RegistroSchema);

module.exports = registro;
