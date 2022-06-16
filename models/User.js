// USER MODEL AND SCHEMA //
// import Mongoose Schema and model
const { Schema, model } = require('mongoose');
// import Thought model
const Thought = require('./Thought');

// User schema set up using Mongoose's Schema constructor
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate email using match method and email regex
      match: /[\w-]+@\w+.\w{2,3}/
    },
    // array to hold associated thoughts (reference: Thought)
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    // array to hold associated friends (self-reference: User)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  // schema options
  {
    toJSON: {
      // allow use of virtuals and getters
      virtuals: true,
      getters: true
    },
    // id: false prevents creation of unnecessary second _id (error handling)
    id: false
  }
);

// VIRTUAL - total number of friends on friends list
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// (!BONUS!) set associated thoughts to be removed on User deletion

// create User model using UserSchema
const User = model('User', UserSchema);

// export User model
module.exports = User;