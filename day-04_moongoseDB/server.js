
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/movies",{
        useNewUrlParser: true, 
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
};

const userSchema = new mongoose.Schema({
    id: number,
    movie_name : string,
    movie_genre : string,
})

const start = async () => {
    await connect();
    app.listen(2233, () => {
        console.log("listening on port 2233")
    });
}

start();