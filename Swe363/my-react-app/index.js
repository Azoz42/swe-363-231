// index.js

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 2;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'MyBlog.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
