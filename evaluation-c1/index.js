
const express = require("express");
const app = express()

app.use(logger)

app.get("/books", (req, res) => {

    return res.send({route: "/books"})
})
app.get("/libraries",checkPermission, (req, res) => {

    return res.send({route: "/libraries", permission : true})
})
app.get("/authors",checkPermission, (req, res) => {

    return res.send({route: "/authors", permission : true})
})


function logger(req,res,next) {

    if(req.path === "/books"){
        req.name = req.param.name
    }
    else if(req.path === "/libraries"){
        req.name = req.param.name
    }
    else{
        req.name = req.param.name
    }

    next()
}

function checkPermission(req, res,next) {

    if(req.path === " /libraries"){
        req.permission = true;
    }
    else if(req.path === "/books"){
        req.permission = true
    }
    else{
        req.permission = false
    }

    
    next()
}

app.listen(5000,() => {
    console.log("listening on port 5000")
})