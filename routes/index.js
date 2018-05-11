const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const db = require('../utils/db');
const {User} = require('../models/user');

app.use(bodyParser.json())


/* User route */
app.get('/user', (req, res) => {
  User.find().then((user) => {
    res.send({user});
  }, (e) => {
    res.status(400).send(e);
  });
});


app.post('/user', (req, res) => {
    var user = new User({
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        name: req.body.name,
        prename: req.body.prename,
        school: req.body.school,
        class: req.body.class,
        description: req.body.description,
    });
    // result = User.addUser(user);
    user.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
});

/* End user route */

module.exports = app;