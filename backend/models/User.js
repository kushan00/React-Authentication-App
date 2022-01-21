const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = User = new mongoose.model("User", userSchema)