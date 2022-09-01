const express = require('express');
const router = express.Router();
const User = require('../model/user');
const controller = require('../controllers/userController');


router.post('/signup', controller.SignupUser);


router.post('/login', controller.loginUser);




module.exports = router;