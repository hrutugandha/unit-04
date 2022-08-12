const express = require("express");

const connect = require("./configs/db");

const usersController = require("./controllers/user.controller");
const studentsController = require("./controllers/student.controller");

const app = express();

app.use(express.json());

app.use("/users", usersController);
app.use("/students", studentsController);

const port = 3000;

// const connect = () => {
//   return mongoose.connect("mongodb://localhost:27017/evaluation");
// };


//-------------------------------------------------------------------------

// CRUD OPERATIONS
// get => getting data from the server
// post => adding data to the server
// put / patch => updating data in the server
// delete => deleting data from the server


app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log(`listening on port ${port}`);
});
