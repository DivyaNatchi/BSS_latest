// src/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong! ' + err.message });
  };
  
  module.exports = errorHandler;  