// import models
const User = require('../models/User');

// controller functions for User CRUD methods
const userController = {
  // GET all users, omit version field (__v) on return
  getAllUsers(req, res) {
    // find() - find all / populate() - populate related data (thoughts)
    User.find({})
      .populate({
        // path: where to populate from
        path: 'thoughts',
        // select: indicates ommision of field with minus symbol
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET single user via _id, populate related thought and friend data
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => {
        // if no user found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with that id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // POST new user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // PUT update user via _id, runValidators, return newly updated doc with {new: true}
  updateUser({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      body,
      { new: true, runValidators: true }
      )
      .then(dbUserData => {
        // if no user found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with that id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // DELETE remove user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        // if no user found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with that id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  },

  // PUT add friend to list, $push to User's friends array field
  addFriend({ params }, res) {
    // find and update single user via _id, push gathered value (friendId) to friends field array
    User.findOneAndUpdate(
      { _id: params.id },
      { $push: { friends: params.friendId } },
      { new: true }
    )
    .then((dbUserData) => {
      // if no user found, send 404
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with that id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  // DELETE remove friend from list, $pull from User's friends array field
  removeFriend({ params }, res) {
    // find and update single user via _id, pull gathered value (friendId) from friends field array
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
    .then(dbUserData => {
      // if no user found, send 404
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with that id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  }
};

// export controller functions
module.exports = userController;