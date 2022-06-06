var jwt = require('jsonwebtoken');
var token = jwt.sign({ 
    accout: 'a.cc.com', 
}, 'secret');

console.log(token)

jwt.verify(token, 'secret', (err,payload) =>{
    console.log(err,payload)
})