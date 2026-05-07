// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [];

// Create endpoint to add comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.send('Comment added');
});

// Create endpoint to get comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});