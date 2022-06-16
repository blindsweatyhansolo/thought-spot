const router = require('express').Router();

// import packaged API routes
const apiRoutes = require('./api');

// prefix '/api' to all imported api routes
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

// export
module.exports = router;