var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users');
const jwtAuth = require('../middleware/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Create a new user 
router.post('/create', jwtAuth.jwtAuth.verifyUser, usersController.userController.createUser);

// get single user
router.get('/:id', jwtAuth.jwtAuth.verifyUser,  usersController.userController.getSingleUser);

// get all users
router.post('/all', jwtAuth.jwtAuth.verifyUser,  usersController.userController.getAllUsers);

//update user record
router.put('/update/:id', usersController.userController.updateUser);

//user sign in
router.post('/signin', usersController.userController.userLogin);

module.exports = router;
