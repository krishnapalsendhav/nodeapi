const express = require('express');
const app = express();
const postRoute = require('./routes/post');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('./validator/postValidator');
const URI = 'mongodb+srv://krishnapal:BgWhw8c3bI6FmluJ@atlascluster.zw0nne0.mongodb.net/?retryWrites=true&w=majority';
const localURI = 'mongodb://0.0.1.27017/myapp';


mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('DB connected Successfully')).catch((err)=>console.log(err));

 mongoose.connection.on('error',err=> {
    console.log(`DB connection error: ${err.message}`);

});
mongoose.set('strictQuery', true);
app.use(morgan('dev'));  
const myOwnMiddleware = (req,res,next) => {
    console.log('Middleware applied');
    next();
};
// app.use(expressValidator.createPostValidator);  
app.use(bodyParser.json());
app.get('/getPost',postRoute.getPost);
app.post('/createPost',postRoute.createPost);
app.get('/getPhone',postRoute.getPhone);
app.post('/createPhone',postRoute.createPhone);
 

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});