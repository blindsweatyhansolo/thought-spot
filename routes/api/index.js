// integrate and package API routes into server with prefixes
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add '/users' prefix to user-routes.js
router.use('/users', userRoutes);
// add '/thoughts' prefix to thought-routes.js
router.use('/thoughts', thoughtRoutes);

// export
module.exports = router;