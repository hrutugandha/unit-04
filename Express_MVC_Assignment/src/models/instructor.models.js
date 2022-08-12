const mongoose = require("mongoose");


const instructorSchema = new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Instructor = mongoose.model("instructor", instructorSchema);

  module.exports = Instructor;