// import luxon's DateTime method
const { DateTime } = require('luxon');

// create function to format createdAt 
const dateFormat = (date) => {
  return date.toLocaleString(DateTime.DATETIME_MED);
};

// export
module.exports = dateFormat;