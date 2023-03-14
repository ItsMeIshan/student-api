const { Department, Student } = require("../models");
const { StatusCodes } = require("http-status-codes");

const createDepartment = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please enter all the details" });
  }

  try {
    const result = await Department.create({
      name: name,
    });
    res.status(StatusCodes.CREATED).json({ msg: "department created!" });
  } catch (err) {
    console.log(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "try again after sometime" });
  }
};

module.exports = { createDepartment };
