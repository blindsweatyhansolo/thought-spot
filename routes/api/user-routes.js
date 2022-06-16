const router = require('express').Router();

// import destructed methods from exported controller script
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

// set up GET all and POST for users - /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// set up GET one, PUT, and DELETE for user - /api/users/:userId
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// set up POST and DELETE for friends - /api/:userId/friends/:friendId
router
  .route('/:id/friends/:friendsId')
  .post(addFriend)
  .delete(removeFriend);

// export
module.exports = router;