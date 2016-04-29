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