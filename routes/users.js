var express = require('express');
var router = express.Router();
const user = require('../models/users');
const usersController = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Create a new user 
router.post('/create', usersController.userController.createUser);

// get single user
router.get('/:id', usersController.userController.getSingleUser);


router.post('/update', async(req, res) => {
  const userObj = new user(req.body);
    user.create(userObj)
    .then((data) => {
      res.status(200)
         .send(data);
    })
    .catch((err) => {
      res.status(400)
         .send(err.message);
    })
});
module.exports = router;
