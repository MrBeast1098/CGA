const express = require('express');
const axios = require('axios');
const app = express();

app.get('/chat', async (req, res) => {
  const message = req.query.message;
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: message,
    max_tokens: 50,
    n: 1,
    stop: '\n',
    temperature: 0.7,
  }, {
    headers: {
      'Authorization': `Bearer ${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}`,
      'Content-Type': 'application/json',
    },
  });
  const text = response.data.choices[0].text.trim();
  res.send(text);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});


