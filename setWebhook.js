/**
 * Created by alexandr on 07.05.2016.
 */
'use strict';

let https = require('https');
let token = require(__dirname + '/config.json').token;
let options = {
    host: 'api.telegram.org',
    port: 443,
    // Убрать хук
    // path: '/bot' + token + '/setWebhook?url=',
    path: '/bot' + token + '/setWebhook?url=https://isprogfun.ru/' + token,
    method: 'GET'
};

let request;

request = https.request(options, function (res) {
    res.on('end', function (data) {
        console.log('Got answer: ' + new Date() + '\n', data);
    });
});

request.on('error', function (e) {
    console.log('Problem with request: ' + e.message);
});

request.end();
