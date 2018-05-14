const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const db = require('../utils/db');
const {User} = require('../models/user');
const {Bank} = require('../models/bank');
const {Group} = require('../models/group');
const {Question} = require('../models/question');

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

  User.findOne({userID:userID}).then((user) => {
    res.send(user);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.put('/user/:userID', (req, res) => {
  var query = { userID: req.params.userID };

  User.findOneAndUpdate(query, {
    role: req.body.role,
    password: req.body.password,
    name: req.body.name,
    prename: req.body.prename,
    school: req.body.school,
    class: req.body.class,
    description: req.body.description
  }, {upsert:true}, (e, raw) => {
    if (e) {
      res.status(400).send('Invalid user supplied');
    }
    res.send(raw);
  });
});

app.delete('/user/:userID', (req, res) => {
  var query = { userID: req.params.userID };

  User.findOneAndRemove(query, 
    (e, raw) => {
      if (e) {
        res.status(400).send('Invalid username supplied');
      }
    res.send(raw);
  });
});

/* End user route */

/* Bank route */
app.get('/bank', (req, res) => {
  Bank.find().then((bank) => {
    res.send({bank});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/bank', (req, res) => {
  var bank = new Bank({
    qbID: req.body.qbID,
    qbName: req.body.qbName,
    qbDescription: req.body.qbDescription,
  });
  // result = User.addUser(user);
  bank.save().then((bank) => {
    res.send(bank);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/bank/:qbID', (req, res) => {
  var query = { qbID: req.params.qbID };

  Group.find(query).then((group) => {
    res.send(group);
  }, (e) => {
    res.status(400).send(e);
  });

});

app.put('/bank/:qbID', (req, res) => {
  var query = { qbID: req.params.qbID };

  Bank.findOneAndUpdate(query, {
    qbName: req.body.qbName,
    qbDescription: req.body.qbDescription,
  }, {upsert:true}, (e, raw) => {
    if (e) {
      res.status(400).send('Update question bank false');
    }
    res.send(raw);
  });
});

app.delete('/bank/:qbID', (req, res) => {
  var query = { qbID: req.params.qbID };

  Bank.findOneAndRemove(query, 
    (e, raw) => {
      if (e) {
        res.status(400).send('Invalid qbID supplied');
      }
    res.send(raw);
  });
});
/* End bank route */


/* Group route */
app.get('/group', (req, res) => {
  Group.find().then((group) => {
    res.send({group});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/group', (req, res) => {
  var group = new Group({
    qgID: req.body.qgID,
    qbID: req.body.qbID,
    qgName: req.body.qgName,
    qgDescription: req.body.qgDescription
  });
  group.save().then((group) => {
    res.send(group);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/group/:qgID', (req, res) => {
  var query = { qgID: req.params.qgID };

  Question.find(query).then((group) => {
    res.send(group);
  }, (e) => {
    res.status(404).send('Question not found');
  });

});

app.put('/group/:qgID', (req, res) => {
  var query = { qgID: req.params.qgID };

  Group.findOneAndUpdate(query, {
    qbID: req.body.qbID,
    qgName: req.body.qgName,
    qgDescription: req.body.qgDescription
  }, {upsert:true}, (e, raw) => {
    if (e) {
      res.status(400).send('Update question group false');
    }
    res.send(raw);
  });
});

app.delete('/group/:qbID', (req, res) => {
  var query = { qgID: req.params.qgID };

  Group.findOneAndRemove(query, 
    (e, raw) => {
      if (e) {
        res.status(400).send('Invalid qbID supplied');
      }
    res.send(raw);
  });
});
/* End group route */

/* Question route */
app.get('/question', (req, res) => {
  Question.find().then((question) => {
    res.send({question});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/question', (req, res) => {
  var question = new Question({
    qID: req.body.qID,
    qgID: req.body.qgID,
    type: req.body.type,
    qContent: req.body.qContent
  });
  // result = User.addUser(user);
  question.save().then((question) => {
    res.send(question);
  }, (e) => {
    res.status(400).send('Add question false');
  });
});

//getQuestionItem

app.put('/question/:qID', (req, res) => {
  var query = { qID: req.params.qID };

  Question.findOneAndUpdate(query, {
    qgID: req.body.qgID,
    type: req.body.type,
    qContent: req.body.qContent
  }, {upsert:true}, (e, raw) => {
    if (e) {
      res.status(400).send('Update question group false');
    }
    res.send(raw);
  });
});

app.delete('/question/:qID', (req, res) => {
  var query = { qID: req.params.qID };

  Question.findOneAndRemove(query, 
    (e, raw) => {
      if (e) {
        res.status(400).send('Invalid qID supplied');
      }
    res.send(raw);
  });
});

/* End Question route */

module.exports = app;