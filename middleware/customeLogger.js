const customLogger = (req, res, next) => {
    console.log('Custom Logger:', req.method, req.url);
    next();
  };
  
  module.exports = customLogger;