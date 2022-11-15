const express = require("express");
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

module.exports = router;
