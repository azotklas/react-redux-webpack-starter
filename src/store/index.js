if (process.env.NODE_ENV === 'production') {
    console.log('PROD webpack');
    module.exports = require('./store.prod');
  } else {
    console.log('DEV webpack');
    module.exports = require('./store.dev');
  }