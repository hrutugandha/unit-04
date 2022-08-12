const mongoose = require("mongoose");


// USER SCHEMA
// Step 1 :- creating the schema
const userSchema = new mongoose.Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      gender: { type: String, required: false },
      dateOfBirth: { type: Number, required: false },
      email: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  // Step 2 : creating the model
  const User = mongoose.model("user", userSchema);

  module.exports = User;
  
  //-------------------------------------------------------------------------
  