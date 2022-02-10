const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../models/users');
require('dotenv').config();

exports.userController = {
  createUser: async (req, res) => {
    newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    await users.init();
    try {
      users.create(newUser)
        .then((data) => {
          res.status(200)
            .send({
              status: "Ok",
              message: "User created successfully", 
              data: data
            });
        })
        .catch((err) => {
          res.status(400)
            .send(err.message);
        })
    } catch (error) {
      res.status(400)
            .send(error.message);
    }    
  },
  getSingleUser: (req, res) => {
    users 
      .findOne({_id: req.params.id}, (err, data) => {
        if (err) {
          res.status(400)
             .send(err.message);
        } else {
          res.status(200)
            .send(data);
        }
      })
       
  },

}