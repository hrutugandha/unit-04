
const mongoose = require("mongoose");


//-------------------------------------------------------------------------

const adminSchema = new mongoose.Schema(
    {
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
  
  const Admin = mongoose.model("admin", adminSchema);

  module.exports = Admin;