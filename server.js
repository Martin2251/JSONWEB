// import express
const express = require("express");

// to require an express server give it a variable

const app = express();

// to require web token

const jwt = require("jsonwebtoken");

app.use(express.json());

// an array of posts

const posts = [
  {
    username: "Dave",
    title: "Post 1",
  },
  {
    username: "Bill",
    title: "Post 2",
  },
];

//create a simple route to return a list of posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  //authenticate user

  const username = req.body.username;
  const user = { name: username };

  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
});

// we want to listen on port 3000
app.listen(3000);
