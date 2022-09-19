const { Sequelize } = require("sequelize");
const db = require("../config/db");

class User extends Sequelize.Model {}

User.init({

    concepto:{
        type: Sequelize.datatype.STRING
    },
    monyo:{
        type: Sequelize.datatype.STRING
    },
    tipo:{
        type: Sequelize.datatype.STRING
    }




}, { sequelize: db, modelName: "User" });


module.exports = User;