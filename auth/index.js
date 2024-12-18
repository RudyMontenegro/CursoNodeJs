const jwt = require('jsonwebtoken');
function sign(data){
   return jwt.sign(data, 'secreto')
}

const check = {
    own: function(req, owner){
        // minuno 5:00 clase 11/29
    } 
}

module.exports = {
    sign,
}