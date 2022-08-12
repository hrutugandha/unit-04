const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
    {
      evaluation_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "evaluation",
      },
      student_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "student",
      },
      batch_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "batch",
      },
      marks: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Submission = mongoose.model("submission", submissionSchema);

  module.exports = Submission;
  
  //-------------------------------------------------------------------------