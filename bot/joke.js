'use strict'
const rp = require('minimal-request-promise');

function getJoke(cb) {
    rp.get('http://api.icndb.com/jokes/random/')
        .then(function(response) {
            const result = JSON.parse(response.body)
            cb(null, result.value.joke)
            return result.value.joke;
        }, function(response) {
            console.log('Error to get jokes from API');
            return cb(response);
        })
}

module.exports = getJoke;
