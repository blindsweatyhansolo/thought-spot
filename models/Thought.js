// THOUGHT MODEL AND SCHEMA //
// import Mongoose Schema and model
const { Schema, model, Types } = require('mongoose');
// import luxon DateTime and dateFormat util function
const { DateTime } = require('luxon');
const dateFormat = require('../utils/dateFormat');


// schema set up for Reactions (SUBDOCUMENT)
const ReactionSchema = new Schema(
  {
    // reactionId - set custom id to avoid confusion with parent thought _id, ObjectId
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: DateTime.local(),
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    },
    // !IMPORTANT! remember to set id: false in the schema options to avoid errors
    _id: false
  }
);


// Thought schema set up using Mongoose's Schema constructor
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: DateTime.local(),
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// VIRTUAL - total number of reactions in reactions array
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// create Thought model using ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export Thought model
module.exports = Thought;