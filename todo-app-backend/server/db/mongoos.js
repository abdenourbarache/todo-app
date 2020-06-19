const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbUri = process.env.PORT ?
 "mongodb+srv://abdennourdbs:abdennour@clustertodoapp-uhj3w.mongodb.net/TodoApp?retryWrites=true&w=majority" 
 :"mongodb://localhost:27017/TodoApp"
mongoose.connect(dbUri);


module.exports = {
    mongoose
}