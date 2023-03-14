const express = require("express");
const { createDepartment } = require("../controllers/department");
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  getStudent,
  deleteStudent,
  updateStudent,
} = require("../controllers/studentapi");

router.route("/").get(getAllStudents);
router.route("/addStudent").post(createStudent);
router.route("/:id").get(getStudent);
router.route("/deleteStudent/:id").delete(deleteStudent);
router.route("/editStudent/:id").put(updateStudent);
router.route("/addDepartment").post(createDepartment);
module.exports = router;
