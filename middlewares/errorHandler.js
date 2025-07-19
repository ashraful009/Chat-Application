//404 not found
const createError = require('http-errors')

function notFoundHandler(req, res, next){
    next(createError(404, "Not found"));
}

//default error handler
(err, req, res, next) => {

}