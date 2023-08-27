/** @format */

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password:{
    type: String,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },

  height: {
    type: Number,
    required: true,
  },

  avatar: {
    publicId: String,
    url: String,
  },

  workouts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "workout",
    },
  ],
  meals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "meal",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
