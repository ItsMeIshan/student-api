const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");
const sequelise = require("./db/database");
const Student = require("./models/students");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", router);
sequelise
  .sync()
  .then((result) => {
    console.log("connection success");
    app.listen(5000, () => {
      console.log("server listening on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
