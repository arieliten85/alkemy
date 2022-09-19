
const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/alkemy_challenge");
  console.log("Conectado a mongoDB");
}
