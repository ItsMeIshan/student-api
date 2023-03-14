// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class department extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       department.belongsTo(models.student, {
//         as: "student_studies",
//         foreignKey: "userid",
//       });
//     }
//   }
//   department.init(
//     {
//       id: DataTypes.STRING,
//       name: DataTypes.STRING,
//       userid: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "department",
//     }
//   );
//   return department;
// };

const { Sequelize } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  const Department = Sequelize.define("Department", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Department.associate = (models) => {
    Department.hasMany(models.Student, {
      foreignKey: "department_id",
    });
  };

  return Department;
};
