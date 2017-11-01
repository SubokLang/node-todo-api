var mongoose = require('mongoose');

var User = mongoose.model('User', { // creates users collection
  email: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {User};
