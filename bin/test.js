require('../app.js');

var mongoose = require('mongoose');

//Test connection:
console.log(mongoose.connection.readyState); //0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting 