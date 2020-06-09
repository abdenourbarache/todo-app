const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    email :{
        type : String,
        required : true,
        trim : true,
        minlenght :1,
        unique : true,
        validated : {
            validator : validator.isEmail,
            message : '{VALUE} is not a valid email !'
        }
    },
    password: {
        type:String,
        required : true,
        minlength : 6
    },
    tokens: [{
        access: {
            type: String,
            required :true
        },
        token : {
            type : String,
            required:true
        }
    }]

});

UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    return _.pick(userObject,['_id', 'email']); 

};

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    const access = 'auth';
    const token = jwt.sign({_id : user._id.toHexString(), access},'mysecret').toString();
    
    user.tokens = user.tokens.concat([{access , token}]);
    
    return user.save().then(() => {
        return token;
    });
};

UserSchema.methods.removeToken = function(token){
    let user = this;

    return user.update({
        $pull :{
            tokens : {token}
        }
    })

}

UserSchema.statics.findByToken = function(token) {
    const User = this;
    let decode;
    try{
        decode = jwt.verify(token,'mysecret');
    }
    catch(e){
        // return new Promise((resolve, reject) => {
        //     reject();
        // });
        return Promise.reject();
    }
    return User.findOne({
        _id: decode._id,
        'tokens.access' : 'auth',
        'tokens.token' :token 
    });
};

UserSchema.statics.findByCredentials = function(email, password){
    const  User = this;
    return User.findOne({email}).then((user) =>{
        if(!user){
            reject();
        }  
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, resu) => {
                if (resu) resolve(user);
                else reject();
               
            });
        });
    });
}

UserSchema.pre('save' , function (next) {
    let user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10, (err,salt) =>{
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                next();
            });
           
        });
    }
    else next();
});

const User = mongoose.model('User',UserSchema);

module.exports = {User}

