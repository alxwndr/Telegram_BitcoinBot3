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