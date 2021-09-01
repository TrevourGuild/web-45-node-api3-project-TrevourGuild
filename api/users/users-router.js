const express = require('express');
const Users = require('./users-model')
const Posts = require('../posts/posts-model')

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get('/', (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  res.json('array of users')
  .catch(next)
});

router.get('/:id', (req, res, next) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  res.json('user object')
  .catch(next)
});

router.post('/', (req, res, next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  res.json('newly created user')
  .catch(next)
});

router.put('/:id', (req, res, next) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  res.json('update user')
  .catch(next)
});

router.delete('/:id', (req, res, next) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  res.json('delete user')
  .catch(next)
});

router.get('/:id/posts', (req, res, next) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  res.json('arry of posts')
  .catch(next)
});

router.post('/:id/posts', (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  res.json('new post')
  .catch(next)

});

router.use((err, req, res, next) =>{
  res.status(err.status || 500).json({
    message:err.message,
    customMessage: 'Something bad inside the hubs router!'
  })
})

// do not forget to export the router
module.exports = router
