
const readline = require('readline');

const chatbotResponses = {
  'How are you?': 'I am doing well, thank you!',
  'What is your name?': 'I am a chatbot created by OpenAI.',
  'exit': 'Goodbye! Have a great day.',
  'quit': 'Goodbye! See you later.'
};

function startChatbot() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.setPrompt('You: ');
  rl.prompt();

  rl.on('line', (input) => {
    const response = getChatbotResponse(input.trim());
    console.log(`Chatbot: ${response}`);

    if (input.trim().toLowerCase() === 'exit' || input.trim().toLowerCase() === 'quit') {
      rl.close();
    } else {
      rl.prompt();
    }
  });

  rl.on('close', () => {
    console.log('Chatbot session ended.');
    process.exit(0);
  });
}

function getChatbotResponse(userInput) {
  return chatbotResponses[userInput] || 'I do not understand that. Can you ask me a different question?';
}

module.exports = { startChatbot };
