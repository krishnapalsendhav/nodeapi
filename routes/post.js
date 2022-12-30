const Post = require('../models/post_model');
const Phone = require('../models/phone_model');
const { response } = require("express");

//Get Phone Api
exports.getPhone = (request,response)=>{
    const phone = Phone.find().then(phones=>{
        response.status(200).json({phone:phones});
    }
    ).catch(err => console.log(err));
};
//Create Phone Api
exports.createPhone = (request,response)=>{
    console.log(request.body);
    const phone = new Phone(request.body);
    phone.save().then((result)=>{
        response.status(200).json({
            phone:result
        });
    }
    ).catch(err => console.log(err));
};

// Get Post Api
exports.getPost = (request,response)=>{
    const post = Post.find().select('_id title body').then(posts=>{
        response.status(200).json({post:posts});
    }).catch(err => console.log(err));

};
// For Creating Post in MongoDB Atlas
exports.createPost = (request,response)=>{
const post = new Post(request.body);
post.save().then((result)=>{
    response.status(200).json({
        post:result
    });
});
};