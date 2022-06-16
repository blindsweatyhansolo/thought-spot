// THOUGHT MODEL AND SCHEMA //
// import Mongoose Schema and model

// import dateFormat to format createdAt on query

// schema set up for Reactions (SUBDOCUMENT)
// reactionId - set custom id to avoid confusion with parent thought _id, ObjectId
// reactionBody - max 280 char / required
// username - required / trim
// createdAt - default: current timestamp, format with dateFormat from /utils
// !IMPORTANT! remember to set id: false in the schema options to avoid errors


// Thought schema set up using Mongoose's Schema constructor
// thoughtText - max 280 char / required
// createdAt - default: current timestamp, format with dateFormat from /utils
// username - required / trim
// reactions - reference [ReactionSchema]
// schema options: virtuals/getters: true, id: false

// VIRTUAL - total number of reactions in reactions array

// create Thought model using ThoughtSchema

// export Thought model