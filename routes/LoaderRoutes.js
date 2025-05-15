const express = require("express");
const axios = require("axios");
const User = require("../models/userModel");
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

const router = express.Router();

router.get("/load", async (req, res) => {
  try {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=10"
    );
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const { data: comments } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    await User.insertMany(users);
    await Post.insertMany(posts);
    await Comment.insertMany(comments);

    res.status(200).json({ message: "users posts comments added succesfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to load and store data" });
  }
});

module.exports = router;
