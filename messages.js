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

bot.onText(/^\/say_hello (.+)$/, function (msg, match) {
    var name = match[1];
    bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
        // reply sent!
    });
});
bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
    var result = 0;
    match[1].trim().split(/\s+/).forEach(function (i) {
        result += (+i || 0);
    })
    bot.sendMessage(msg.chat.id, result).then(function () {
        // reply sent!
    });
});

module.exports = bot;
