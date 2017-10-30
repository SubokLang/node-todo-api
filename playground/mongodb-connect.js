// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'andrew', age:25};
// var {name} = user;  // creates var name = 'andrew'

MongoClient.connect('mongodb://192.168.11.23:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connected to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    text: 'Clean the sink',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo');
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  });

  // db.collection('Users').insertOne({
  //   name: 'lamdor',
  //   age: 49,
  //   location: 'San Jose'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  //   console.log(result.ops[0]._id.getTimeStamp());
  // });

  db.close();
});
