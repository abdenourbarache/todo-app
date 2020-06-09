const {User} = require('./../model/user');

const authenticate = (req,res,next) => {
    const token = req.header('x-auth');
    console.log(req);
    User.findByToken(token).then((user) => {
        if(!user) Promise.reject();
        req.user = user;
        req.token = token;
        next();   

    }).catch((e) => {
        res.status(401).send();
    });
};

module.exports = {authenticate};