// import models
const { User, Thought } = require('../models');

// controller functions for Thought CRUD methods
const thoughtController = {
  // GET all thoughts, omit version field (__v) on return
  getAllThoughts(req, res) {
    Thought.find({})
      // sort() method set to DESC sort for newest thoughts first
      .sort({ _id: -1 })
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET single thought via _id, omit version field on return
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .select('-__v')
      .then(dbThoughtData => {
        // if no thought found, send 404
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with that id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // POST new thought, $push to User's thoughts field array
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        // using the new thought's _id, push thought to User
        return User.findOneAndUpdate(
          { _id: params.id },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbThoughtData) => {
        // if no thought found, send 404
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with that id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // PUT update thought via _id, runValidators: true
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      body,
      { new: true, runValidators: true }
    )
    .then(dbThoughtData => {
      // if no thought found, send 404
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with that id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  // DELETE remove thought, $pull from User's thoughts field array
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then(dbThoughtData => {
        // if no thought found, send 404
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with that id!' });
          return;
        }

        // update thoughts field array for user
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // PUT add reaction, $push to Thought's reactions field array
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
    .then(dbThoughtData => {
      // if no thought found, send 404
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with that id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  // DELETE remove reaction, $pull from Thought's reactions field array
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  }
};

// export controller functions
module.exports = thoughtController;