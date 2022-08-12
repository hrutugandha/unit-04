const mongoose = require("mongoose");


const evaluationSchema = new mongoose.Schema(
    {
      date_of_evaluation: { type: Date, required: true },
      instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "instructor",
        required: true,
      },
      batch_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Evaluation = mongoose.model("evaluation", evaluationSchema);

  modules.exports = Evaluation;
  //-------------------------------------------------------------------------