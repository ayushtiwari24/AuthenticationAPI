const express = require('express');
const app = express();
const studentRoute = require('./api/routes/student')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./api/routes/user');

mongoose.connect("mongodb://localhost:27017/CollegeData", {
    useNewUrlParser: "true",
});

mongoose.connection.on("error", err => {
    console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/student', studentRoute);
app.use('/user', userRoute)


app.use((req, res, next) => {
    res.status(404).json({
        error: 'bad request'
    })
})

module.exports = app;