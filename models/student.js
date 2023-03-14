// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class student extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       student.hasMany(models.department, {
//         as: "departments",
//         foreignKey: "userid",
//       });
//     }
//   }
//   student.init(
//     {
//       id: DataTypes.STRING,
//       name: DataTypes.STRING,
//       email: DataTypes.STRING,
//       age: DataTypes.INTEGER,
//     },
//     {
//       sequelize,
//       modelName: "student",
//     }
//   );
//   return student;
// };

module.exports = (Sequelize, DataTypes) => {
  const Student = Sequelize.define("Student", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department_id: {
      type: DataTypes.INTEGER,
    },
  });

  Student.associate = (models) => {
    Student.belongsTo(models.Department, {
      foreignKey: "department_id",
    });
  };

  return Student;
};
