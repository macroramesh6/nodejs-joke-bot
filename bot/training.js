'use strict'

function trainingDocument(TrainingDocument) {
    return [
        new TrainingDocument('greetings', 'Hi'),
        new TrainingDocument('greetings', 'Hey'),
        new TrainingDocument('greetings', 'Hello'),

        new TrainingDocument('say_joke', 'Tell me a joke'),
        new TrainingDocument('say_joke', 'I wanna laugh'),
        new TrainingDocument('say_joke', 'I am very bored'),

        new TrainingDocument('more', 'show me more'),
        new TrainingDocument('more', 'More'),

        new TrainingDocument('help', 'Help'),
        new TrainingDocument('help', 'Help me'),
        new TrainingDocument('help', 'I need some help'),
        new TrainingDocument('help', 'How could you assist me'),

        new TrainingDocument('reset', 'reset'),
        new TrainingDocument('reset', 'cls'),
        new TrainingDocument('reset', 'clear screen'),
        new TrainingDocument('reset', 'logout me'),

        new TrainingDocument('exit', 'exit'),
        new TrainingDocument('exit', 'close'),
        new TrainingDocument('exit', 'bye')
    ]
}

module.exports = trainingDocument
