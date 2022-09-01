const Student = require('../model/student');
const mongoose = require('mongoose');



const getAllStudent = (req, res, next) => {
    Student.find()
        .then(result => {
            res.status(200).json({
                studentData: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
};

const getStudent = (req, res, next) => {
    console.log(req.params.id);
    Student.findById(req.params.id)
        .then(result => {
            res.status(200).json({
                studentData: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
};

const create = (req, res, next) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender
    })

    student.save().then(result => {
        console.log(result);
        res.status(200).json({
            newStudent: result
        })
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
};

const deleteStudent = (req, res, next) => {
    Student.remove({ _id: req.params.id })
        .then(result => {
            res.status(200).json({
                message: 'student deleted',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
};

module.exports = { getAllStudent, getStudent, create, deleteStudent };