const axios = require('axios');

const functions = {
    add: (a, b) => a + b,
    returnValue: value => value,
    fetchPhoto() {
        return axios('https://jsonplaceholder.typicode.com/photos/1')
        .then(({ data }) => data).catch(console.error)
    },
    reverseString: a => a.split('').reverse().join('')
}

module.exports = functions;