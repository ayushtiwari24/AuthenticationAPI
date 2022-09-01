// Created this miniproject to learn authentication with jwt using nodejs, mongodb and express.

// created server.js to launch server.
 --made connection with database in app.js

// created a folder api
--created model folder to define schema for student and user.
-- created rotes folder 
  -- in route folder created file student.js to handle get,post ,delete requests of studentdata.
  --created user.js file to handle login and signup requests.

// in controller folder created studentController.js and userController.js

// in middleware folder created check-auth.js .

-----dependencies and devdependencies used-----
dependencies": {
    "bcrypt": "^5.0.1",
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.5.4"
  },
  "devDependencies": {
    "nodemon": "^2.0.19"

// used bcrypt to store password in encrypted form.
//used body-parser to process data send in request body.
// jwt is used for authentication .
//used middle to allow only loggedin user to made changes with api.