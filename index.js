const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Object with dog breeds and corresponding image filenames
const breeds = {
  retriever: ["retriever1.jpg", "retriever2.jpg", "retriever3.jpg"],
  bulldog: ["bulldog1.jpg", "bulldog2.jpg", "bulldog3.jpg"],
  poodle: ["poodle1.jpg", "poodle2.jpg", "poodle3.jpg"],
};

// Get a random item from an array
const randInt = (n) => Math.floor(n * Math.random());
const getRandomItemFromArray = (arr) => arr[randInt(arr.length)];

// Routes
app.get("/breeds", (req, res) => {
  res.json(Object.keys(breeds));
});

app.get("/image/:breed", (req, res) => {
  const breed = req.params.breed.toLowerCase();
  if (breeds[breed]) {
    const image = getRandomItemFromArray(breeds[breed]);
    res.json([image]);
  } else {
    res.status(404).send("Breed not found");
  }
});

// Serve static files
app.use(express.static("public"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
