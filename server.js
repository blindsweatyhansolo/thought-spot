// import mongoose and express
const mongoose = require('mongoose');
const express = require('express');

// define port and express middleware
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import route scripts
app.use(require('./routes'));

// instruct Mongoose which DB to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/thought-spot', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// log mongo queries being executed
mongoose.set('debug', true);

// listen for server start
app.listen(PORT, () => {
  console.log(`Connected to localhost:${PORT}`)
});