const express = require('express');
const path = require('path');
const { copyFiles } = require('./fileOperations');
const { startChatbot } = require('./chatbot');

const app = express();
const port = process.env.PORT || 2;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  try {
    // Ensure that the copyFiles function is properly imported and defined in './fileOperations'
    await copyFiles('sourceDir', 'targetDir', ['.txt', '.jpg']);
    res.send('Copy operation completed.'); 
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.get('/chatbot', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chatbot.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

startChatbot();
