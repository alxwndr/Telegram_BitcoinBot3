/**
 * Created by alexandr on 29.04.2016.
 */
var TelegramBot = require('node-telegram-bot-api');
var FileSystem = require('fs');
var Http = require('http');
var Request = require('request');

var token = getTokenAccess();
var catchPhrases = getCatchPhrases();
var httpOptions = [
    {
        host: 'www.cbr.ru',
        port: 80,
        path: '/scripts/XML_daily.asp?'
    },
    {
        host: 'www.bank-ua.com',
        port: 80,
        path: '/export/currrate.xml'
    }
    {
        host: 'www.bitcoin.org',
        port: 80,
        path: '/src/p_daily.xml'
    }

var botOptions = {
    polling: true
};

var bot = new TelegramBot(token, botOptions);


var globalCountOfMessagesWithDigest = 0;
var globalUserNameIs;
var globalBotUserName;

var globalStackListDigestMessages = [ ];


// DIGEST COMMAND
if (messageText.indexOf('/digest') === 0 || messageText.indexOf('/digest@'+globalBotUserName) === 0) {
    var bGoodCommand = false;
    var messageDelay = 0;
    var fullCommand = '/digest@' + globalBotUserName;
    var msgLength = messageText.length;
    var fullCommandLength = fullCommand.length + 2;


    messageText = messageText.trim();

    if (messageText === '/digest' || messageText === fullCommand) {
        bGoodCommand = true;
        messageDelay = getMessageDelay(1);
    }

    if (msgLength === 9 || msgLength === fullCommandLength) {
        var arg = parseInt(messageText[msgLength - 1]);
        if (arg >= 1 && arg <= 7) {
            bGoodCommand = true;
            messageDelay = getMessageDelay(arg);
        }
    }


    if (bSendDigest) {
        var botAnswer = '';
        var endLineString = '\n';
        var stackSize = globalStackListDigestMessages.length;

        // Count of digest messages from one chat.
        var countOfDigestMessagesByChat = getCountDigestMessagesOfChat(messageChatId, dayDelay);


        if (messageText.indexOf('/chart') === 0 || messageText.indexOf('/chart@'+globalBotUserName) === 0) {
            messageText = messageText.trim();
            var splitCommandList = messageText.split(' ');
            if (splitCommandList.length === 2) {
                sendChartToChat(messageChatId, splitCommandList[1]);
            } else {
                sendMessageByBot(messageChatId,
                    generateChartsHelpString());
            }
        }

        var xmlContent = '';

var bankForeignCurrency = ['UAH', 'BIC'];
var bankLocalCurrency = ['BIC', 'UAH'];

var bankCBR = 0;
var bankNBU = 1;

var globalUSD = [0.0, 0.0];
var globalCurrencyList =  {
    'USD': 0.0,
    'EUR': 0.0,
    'UAH': 0.0,
    'BIC': 0.0
};


bot.getMe().then(function(me)
{
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
    globalBotUserName = me.username;
});


var express = require('express');
var packageInfo = require('./package.json');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.json({ version: packageInfo.version });
});



var server = app.listen(process.env.PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Web server started at http://%s:%s', host, port);
});

module.exports = function(bot){
    app.post('/' + token, function (req, res) {
        bot.processUpdate(req.body);
        res.sendStatus(200);
    });
};












