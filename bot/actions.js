'use strict'
var getJoke = require('./joke'),
    _ = require('lodash');


module.exports = function(SingleLineMessage, MultiLineMessage) {

    var greetingAction = function(context, request, response, next) {
        var list = [
            `Hello, How are you? I am a joke bot.`,
            `¡HOLA! Hope you are good. I am a joke bot.`
        ];
        response.message = new MultiLineMessage([
            _.shuffle(list)[0],
            `type 'help' to know about me.`
        ]).content;
        next();
    }

    var jokeAction = function(context, request, response, next) {
        getJoke(function(err, res) {
            if (err) {
                console.log('Error');
                next();
            }
            response.message = new SingleLineMessage(res).content;
            next();
        });
    };

    var moreAction = function(context, request, response, next) {
        getJoke(function(err, res) {
            if (err) {
                console.log('Error');
                next();
            }
            response.message = new MultiLineMessage([
                'Chuck Norris are good!! here the more jokes for you',
                res
            ]).content;
            next();
        });

    };

    var helpAction = function(context, request, response, next) {
        response.message = new MultiLineMessage([
            `                                   HELP                        `,
            `---------------------------------------------------------------------------------`,
            `• To get a joke.        - Type 'Tell me a joke' or 'I wanna laugh'or 'I am very bored' etc.,`,
            `• To get a more jokes.  - Type 'show me more' or 'more'`,
            `• To get help.          - Type 'help', 'How could you assist me'`,
            `• To reset chat window. - Type 'reset' or 'cls' or 'logout me'`,
            `• To exit.              - Type 'bye'or 'goodbye' or 'close'`
        ]).content;

        next();
    };

    var resetAction = function(context, request, response, next) {
        response.message = new SingleLineMessage(`\x1Bc`).content;
        next();
    };

    var exitAction = function(context, request, response, next) {
        console.log('Goodbye, Have a great day!');
        process.exit(0);
        // next();
    };

    return {
        greetingAction: greetingAction,
        jokeAction: jokeAction,
        moreAction: moreAction,
        helpAction: helpAction,
        resetAction: resetAction,
        exitAction: exitAction
    }

}
