console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

const add = notes.add(3, 7)
console.log(add)

// let user = os.userInfo()

// fs.appendFile('greeting.txt', `Hello ${user.username}! Your age is ${notes.age}`, (error) => {
//     if (error) {
//         console.log('There was an error writing the file!')
//     }
// })