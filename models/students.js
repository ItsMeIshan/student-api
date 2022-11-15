const Sequelize = require("sequelize");
const sequelize = require("../db/database");

const Student = sequelize.define("student", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: Sequelize.STRING,
  age: Sequelize.INTEGER,
});
module.exports = Student;
