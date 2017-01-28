'use strict'

// dependencies
const talkify = require('talkify');
const Bot = talkify.Bot;
const BotTypes = talkify.BotTypes;
const Message = BotTypes.Message;
const Skill = BotTypes.Skill;

// Bot instance
const bot = new Bot();

// Training dependencies
const TrainingDocument = BotTypes.TrainingDocument;
const trainingDocument = require('./training');
bot.trainAll(trainingDocument(TrainingDocument), function() {});

// Actions dependencies
const SingleLineMessage = BotTypes.SingleLineMessage;
const MultiLineMessage = BotTypes.MultiLineMessage;
const actions = require('./actions')(SingleLineMessage, MultiLineMessage);

// set Skills to actions
var greatingSkill = new Skill('greetings', 'greetings', actions.greetingAction);
bot.addSkill(greatingSkill);
var jokeSkill = new Skill('joke_skill', 'say_joke', actions.jokeAction);
bot.addSkill(jokeSkill);
var moreSkill = new Skill('more_skill', 'more', actions.moreAction);
bot.addSkill(moreSkill);
var helpSkill = new Skill('help_skill', 'help', actions.helpAction);
bot.addSkill(helpSkill);
var resetSkill = new Skill('reset_skill', 'reset', actions.resetAction);
bot.addSkill(resetSkill);
var exitSkill = new Skill('exit', 'exit', actions.exitAction);
bot.addSkill(exitSkill);


module.exports = bot;
