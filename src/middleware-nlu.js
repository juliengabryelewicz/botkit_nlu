const axios = require("axios")
const debug = require('debug')('botkit:nlu')

module.exports = config => {
  if (!config) {
    config = {}
  }

  if (!config.nlu_uri) {
    config.nlu_uri = 'http://localhost:8000'
  }

  var middleware = {
    receive: (bot, message, next) => {

      if (!message.text || message.bot_id) {
        next();
      }
      debug('Get intent from URL', message.text);
      axios.get(`${config.nlu_uri}`, {
           params: {
             text: encodeURIComponent(message.text)
           }
         })
         .then(function (response) {
           debug('Nlu response', response);
            message.intent = response.data.intent;
            message.slots = response.data.slots;
            next();
         })
         .catch(function (error) {
           return error;
      });
    }
  }
  return middleware
}
