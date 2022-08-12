
const express = require("express");
const app = express();
const User = require("../models/user.model");
const authorise = require("../middleware/auth")

const router = express.Router();

app.post('/',authorise, async(req, res) =>{
    const user = await User.findOne({ email : req.body.email });

    return res.status(201).send({ user:user });
});



module.exports = router;