const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connect = () => {
  return mongoose.commect("mongoose://localhost:27017/test");
};

// author SCHEMA
// Step 1 :- creating the schema
const authorSchema = new mongoose.Schema({
    first_name: { type: String, required: true},
    last_name: { type: String, required: true},
    email: { type: String, required: true},
    id: { type: String, required: true},
    genre: { type: String}
},{
    timestamps: true,
})
// Step 2 : creating the model
const Author = mongoose.model('author',authorSchema)

// POST SCHEMA
// Step 1 :- creating the schema
const bookSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      author: { type: String, required: true },
      summery: { type: String, required: true},
      genre: String,
      authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );
// Step 2 :- creating the model
const Book = mongoose.model("book", bookSchema);




app.listen(8888, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }
  console.log("listening on port 8888");
});
