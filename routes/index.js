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
        userID: req.body.userID,
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
    user.save().then((user) => {
      res.send(user);
    }, (e) => {
      res.status(400).send(e);
    });
});

app.get('/user/:userID', (req, res) => {
  var userID = req.params.userID;

  User.find({userID:userID}).then((user) => {
    res.send(user);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.put('/user/:userID', (req, res) => {
  userID = req.params.userID;

  User.update({userID}, {
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    name: req.body.name,
    prename: req.body.prename,
    school: req.body.school,
    class: req.body.class,
    description: req.body.description
  }, (err, raw) => {
    if (err) {
      res.status(400).send('Invalid user supplied');
    }
    res.send('Update secces user with email ' + req.body.email );
  });
});

/* End user route */

module.exports = app;