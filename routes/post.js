const Post = require("../models/post_model");
const Phone = require("../models/phone_model");
const Product = require("../models/product_model");

//Create Products
exports.createProduct = (request, response) => {
  const product = new Product(request.body);
  product.save().then((result) => {
    response.status(200).json({
      product: result,
    });
  });
};
//Get Products
exports.getProduct = (request, response) => {
  const product = Product.find()
    .then((products) => {
      response.status(200).json({ product: products });
    })
    .catch((err) => console.log(err));
};


//Get Phone Api
exports.getPhone = (request, response) => {
  const phone = Phone.find()
    .then((phones) => {
      response.status(200).json({ phone: phones });
    })
    .catch((err) => console.log(err));
};
//Create Phone Api
exports.createPhone = (request, response) => {
  const phone = new Phone(request.body);
  phone
    .save()
    .then((result) => {
      response.status(200).json({
        phone: result,
      });
    })
    .catch((err) => console.log(err));
};

// Get Post Api
exports.getPost = (request, response) => {
  const post = Post.find()
    .select("_id title body")
    .then((posts) => {
      response.status(200).json({ post: posts });
    })
    .catch((err) => console.log(err));
};
// For Creating Post in MongoDB Atlas
exports.createPost = (request, response) => {
  const post = new Post(request.body);
  post.save().then((result) => {
    response.status(200).json({
      post: result,
    });
  });
};
