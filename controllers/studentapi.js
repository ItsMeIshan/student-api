const { Student, Department } = require("../models");
const { StatusCodes } = require("http-status-codes");

const createStudent = async (req, res) => {
  const { firstName, lastname, age, department_id } = req.body;
  if (!firstName || !lastname || !age || !department_id) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please enter all the details" });
  }

  try {
    const result = await Student.create({
      firstName: firstName,
      lastname: lastname,
      age: age,
      department_id: department_id,
    });
    res.status(StatusCodes.CREATED).json({ msg: "student created!" });
  } catch (err) {
    console.log(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "try again after sometime" });
  }
};

const getStudent = async (req, res) => {
  const { id } = req.params;
  if (!req.params) {
    return res.send("no parameters passed");
  }
  if (!req.params.id) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .send("please pass valid id of student");
  }
  try {
    const result = await Student.findAll({
      where: {
        id: id,
      },
    });
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `cannot find student with id ${id} ` });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  if (!req.params) {
    return res.send("no parameters passed");
  }
  if (!req.params.id) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .send("please pass valid id of student");
  }
  try {
    const result = await Student.destroy({
      where: {
        id: id,
      },
    });
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `cannot find student with id ${id} ` });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const updatedAge = req.body.age;
  if (!req.params) {
    return res.send("no parameters passed");
  }
  if (!req.params.id) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .send("please pass valid id of student");
  }
  try {
    const student = await Student.findByPk(id);
    try {
      student.name = updatedName;
      student.email = updatedEmail;
      student.age = updatedAge;
      const savedStudent = student.save();
      res.status(StatusCodes.CREATED).json(savedStudent);
    } catch (err) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "please provide updated details within constraints" });
    }
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `cannot find student with id ${id} ` });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: [
        {
          model: Department,
        },
      ],
    });
    res.status(StatusCodes.OK).send(JSON.stringify(students));
  } catch (err) {
    console.log(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "try again after sometime" });
  }
};
module.exports = {
  createStudent,
  getAllStudents,
  getStudent,
  deleteStudent,
  updateStudent,
};
