
const express = require("express");

const app = express();

app.get("/books", allBooks, (req, res) => {
  return res.send({
    route: "/books",
  });
});

app.use(singleBook);

app.get("/books/theSecret", (req, res) => {
  return res.send({
    "bookName": req.name,
     route: "/books/theSecret",
  });
});

app.get("/books/theAlchemist",(req, res) => {
  return res.send({
    "bookName": req.name,
    "route": "/books/theAlchemist",
  });
});

app.get("/books/harryPotter",(req, res) =>
  res.send({
    "bookName": req.name,
    "route": "/books/harryPotter",
  })
);

function allBooks(req, res, next) {
  console.log("fetching all books...");

  next();
}

function singleBook(req, res, next) {
  if (req.path === "/books/theSecret") {
    req.name = req.params.name;
  } else if (req.path === "/books/theAlchemist") {
    req.name = req.params.name;
  } else if (req.path === "/books/harryPotter") {
    req.name = req.params.name;
  }
  next();
}

app.listen(5000, () => {
  console.log("Listening on the port 5000");
});

