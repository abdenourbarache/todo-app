const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const bcrypt =require('bcryptjs');
const cors = require('cors');
const path = require('path');

const {mongoose} = require('./db/mongoos');
const {Todo} = require('./model/todo');
const {User} = require('./model/user');
const {authenticate}= require('./middleware/authenticate');
 
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var corsOptions = {
    exposedHeaders :['x-auth'],
  }
app.use(cors(corsOptions));

app.post('/todos',authenticate ,(req,res) => {
    const todo = new Todo({
        text : req.body.text,

        _creator : req.user._id
    });

    todo.save().then((doc) => {
        res.send(doc);  
    }, (err) =>{
        res.status(400).send(err);
    })
});


app.get('/todos',authenticate, (req,res) => {
    Todo.find({_creator : req.user._id}).then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos/:id',authenticate, (req,res) => {
    Todo.findOne({
        _id : req.params.id,
        _creator : req.user._id
    }).then((doc) =>{
        if(!doc) res.status(400).send({error : "Id not found"})
        res.send({doc});

    },(err) => {
        res.status(400).send(err);
    });
});

app.delete("/todos/:id", authenticate ,(req,res) => {
    Todo.findOneAndRemove({
        _id : req.params.id,
        _creator : req.user._id
    }).then((doc) =>{
        if(!doc) res.status(400).send({error : "Id not found"});
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    }) 
});

app.put("/todos/:id", authenticate ,(req,res) => {
    const todo = {text :req.body.text, completed : req.body.completed, completedAt : req.body.completedAt}
    Todo.findOneAndUpdate({
        _id : req.params.id,
        _creator : req.user._id
    }, todo, {
        new: true
      }).then((doc) =>{
        if(!doc) res.status(400).send({error : "Id not found"});
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    }) 
});

app.post('/users', (req, res) => {
    const body = _.pick(req.body,["email","password"]);
    let user = new User(body);

    user.save().then(()=>{
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth',token).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

app.post('/users/login', (req, res) => {
    const body = _.pick(req.body, ["email" ,"password"]);
    
    User.findByCredentials(body.email, body.password).then((user) =>{
        return user.generateAuthToken().then((token) => {
            res.header('x-auth',token).send(user);
        });
    }).catch((e) => res.status(400).send());
    

})
app.get('/users/dashboard',authenticate, (req,res) => {
    res.send(req.user);
});

app.delete('/users/logout', authenticate,(req,res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    },() => {
        res.status(400).send();
    })
});


app.listen(port, () => {
    console.log("Server running on http://localhost:" + port);
});
