const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59f9389d2e95b55cf8804243';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({   //returns array
//   _id: id
// }).then((todos) => {
//   console.log('Todos --', todos);
// });
//
// Todo.findOne({  //returns object
//   _id: id
// }).then((todo) => {
//   console.log('Todo --', todo);
// });

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By ID --', todo);
}).catch((e) => console.log(e));
