const router = require('express').Router();

// import destructured methods from exported controller script
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// set up GET all and POST for thoughts - /api/thoughts
router
  .route('/')
  .get(getAllThoughts);
  
  // set up GET one, PUT, and DELETE for thoughts - /api/thoughts/:thoughtId
  router
  .route('/:id')
  .get(getThoughtById)
  .post(createThought)
  .put(updateThought);

router
  .route('/:thoughtId/:userId')
  .delete(deleteThought);

// set up POST for reaction - /api/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// set up DELETE for reaction - /api/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/:reactionId/reactions')
  .delete(removeReaction);

// export
module.exports = router;