# Botkit NLU

Allows you to connect Botkit v4 with the NLU (Snips, Dialogflow...) of your choice.

You need to give an URL returning an intent and slots.

# How to use it

Use this command first :

---
npm install botkit_nlu --save
---

Then, in your botkit code :

---
var botkitNlu = require('botkit_nlu')({nlu_uri: 'https://url.of.your.choice'});
controller.middleware.receive.use(botkitNlu.receive);

controller.hears(async (message) => { return (message.intent === 'your-intent') },'message', async(bot, message) => {
    //your code
});
---
