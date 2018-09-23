console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')

// console.log(_.isString(true))
// console.log(_.isString('Ahmed'))

const filteredArray = _.uniq(['Ahmed', 1, 2, 'Ahmed', 3, 1])
console.log(filteredArray)

// const add = notes.add(3, 7)
// console.log(add)

// let user = os.userInfo()

// fs.appendFile('greeting.txt', `Hello ${user.username}! Your age is ${notes.age}`, (error) => {
//     if (error) {
//         console.log('There was an error writing the file!')
//     }
// })