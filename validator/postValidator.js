exports.createPostValidator = (request,response,next)=>{
    // title
    request.check('title','Write a title').notEmpty();
    request.check('title','Title must be between 4 to 150 characters').isLength({
        min:4,
        max:150
    });
    // body
    request.check('body','Write a body').notEmpty();
    request.check('body','Body must be between 4 to 2000 characters').isLength({
        min:4,
        max:2000
    });
    // check for errors
    const errors = request.validationErrors();
    // if error show the first one as they happen
    if (errors) {
        const firstError = errors.map((error)=>error.msg)[0];
        return response.status(400).json({error : firstError});
    }
    // proceed to next middleware
    next();
};