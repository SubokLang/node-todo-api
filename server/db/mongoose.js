var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.11.23:27017/TodoApp', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.export = {mongoose};
