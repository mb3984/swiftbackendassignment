const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  username: String,
  email: String,
  address: Object,
  phone: String,
  website: String,
  company: Object,
});

module.exports = mongoose.model("User", userSchema);
