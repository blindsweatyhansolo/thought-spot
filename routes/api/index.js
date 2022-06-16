// integrate and package API routes into server with prefixes
const router = require('express').Router();
const userRoutes = require('./user-routes');

// add '/users' prefix to user-routes.js
router.use('/users', userRoutes);
// add '/thoughts' prefix to thought-routes.js

// export
module.exports = router;