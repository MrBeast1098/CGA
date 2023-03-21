let express = require('express');
let io;
let app = express();
let socket = require('socket.io');
let server;
let {Configuration, OpenAIApi} = require('openai')
const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function getAI(prompt){
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.9,
            max_tokens: 700,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        });
    io.emit('html', JSON.stringify({type: 'aiRec', data:response.data.choices[0].text.replaceAll('\n', '<br>')}));
}

async function getJS(prompt) {
    const response = await openai.createCompletion({
