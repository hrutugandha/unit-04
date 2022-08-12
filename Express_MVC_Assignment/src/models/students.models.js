const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema(
    {
      rollId: { type: String, required: true },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      password: { type: String, required: true, unique: true },
      username: { type: String, required: true, unique: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  // Step 2 : creating the model
  const Student = mongoose.model("student", studentSchema);

  module.exports = Student;