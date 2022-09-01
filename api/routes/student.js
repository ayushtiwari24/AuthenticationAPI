const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const controller = require('../controllers/studentController');
//const student = require('../model/student');

router.get('/', checkAuth, controller.getAllStudent)

router.get('/:id', controller.getStudent)


router.post('/', controller.create)

//delete request
router.delete('/:id', controller.deleteStudent);




module.exports = router;