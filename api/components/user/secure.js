const auth = require('../../../auth');

module.exports = function checkAuth(Action){

    function middleware(req,res,next){
        switch(Action){
            case 'update' :
                const owner = req.body.id;
                auth.check.own(req, owner)
                break;
            default:
                next();
        }
    }

    return middleware
}