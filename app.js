console.log('Starting app.')

const fs = require('fs')
const os = require('os')

let user = os.userInfo()

fs.appendFile('greeting.txt', `Hello ${user.username}!`, (error) => {
    if (error) {
        console.log('There was an error writing the file!')
    }
})
