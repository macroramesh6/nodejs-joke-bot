var readline = require('readline'),
    bot = require('./bot'),
    _ = require('lodash'),
    botPrefix = 'JokeBot> ',
    userPrefix = 'You> ',
    rl = readline.createInterface(process.stdin, process.stdout);

// random number to identify user
var randomNumber = _.random(0, 2000);



// Display bot response
var resolved = function(err, messages) {
    if (err) return console.error(err);
    _.flatten(messages).forEach(function(message) {
        console.log(botPrefix + message);
    });
    rl.prompt();
};


// on read of console line
rl.on('line', function(line) {
    bot.resolve(randomNumber, line, resolved);
}).on('close', function() {
    console.log('Have a great day!');
    process.exit(0);
});


// console.log(botPrefix + 'Good to see you. You can ask me Chuck Norris jokes.');
rl.setPrompt(userPrefix);
rl.prompt();
