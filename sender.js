/**
 * Created by alexandr on 03.05.2016.
 */
let sender = require(__dirname + '/sender');
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/bcratebot';

MongoClient.connect(url, function (err, db) {
    if (err) { throw err; }

    console.log('Connected to db');

    db.collection('rates').find().toArray(function (err, collection) {
        if (err) { throw err; }

        let text = collection.map(function (rate) {
            let result = (Math.round(rate.rate * 100) / 100).toString();

            if (result.length === 4) {
                result = result + '0';
            }

            return rate.title + ': ' + result + ' руб';
        }).join('\n');

        db.collection('users').find().toArray(function (err, users) {
            if (err) { throw err; }

            users.forEach(function (user) {
                if (user.notifications) {
                    sender.sendMessage(user.id, text);
                }
            });

            db.close();
        });
    });
});

updateUser: function (chatId, db, options) {
    let that = this;

    if (options && Object.keys(options).length) {
        db.collection('users').findOneAndUpdate({
            id: chatId
        }, {
            $set: options
        }, function (err) {
            if (err) { throw err; }

            if (typeof options.sendChanges === 'boolean') {
                that.notifyAdmin(db, options.sendChanges);
            }
        });
    }
},


