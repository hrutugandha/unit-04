const express = require("express")

const app = express();

app.get("", (req,res) => {
    res.send("hello from homepage")
})

app.get("/books", (req,res) =>{
    res.send([
        {
            "Book-title": "The Secret",
            "Author": "Rhonda Byrne",
            "Type": "Book"
        },
        {
            "Book-title": "The Alchemist",
            "Author": "Paulo Coelho",
            "Type": "Novel"
        },
        {
            "Book-title": "The Monk Who Sold His Ferrari",
            "Author": "Robin Sharma",
            "Type": "Book"
        },
        {
            "Book-title": "Think and Grow Rich",
            "Author": "Napoleon Hill",
            "Type": "Book"
        },
    ])
})

app.listen(5000, () => {
    console.log("hey")
})
