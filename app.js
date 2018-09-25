console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv

const command = process.argv[2]
console.log('Command: ', command)
console.log('Yargs: ', argv)

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body) 
    const message = note ? `Note with title: "${note.title}" wass successfully added.` : "Note was not added. A note with the same title exists."
    console.log(message)
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('Command not recognized')
}