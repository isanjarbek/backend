const mongoose = require("mongoose");

const Users = mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,  
  },
});
module.exports = mongoose.model("User", Users);
