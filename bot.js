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