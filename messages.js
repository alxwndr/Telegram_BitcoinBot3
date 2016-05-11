/**
 * Created by alexandr on 11.05.2016.
 */

var token = 'TOKEN';

var Bot = require('node-telegram-bot-api'),
var bot;

if(process.env.NODE_ENV === 'production') {
    bot = new Bot(token);
    bot.setWebHook('https://api.telegram.org/bot' + bot.token);
}
else {
    bot = new Bot(token, { polling: true });
}
// bot.setWebHook('https://api.telegram.org/bot' + bot.token);
console.log('bot server started...');