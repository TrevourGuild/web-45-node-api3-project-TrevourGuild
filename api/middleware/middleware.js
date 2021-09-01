const express = require('express');

const server = express();

function logger(req, res, next){
  console.log('this is happening')
  console.log(`it is a ${req.method} request!`)
  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
server.use(logger)
