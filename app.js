const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')
const argvOptions = {
    title: {
        describe: 'Title of note',
        demand: true,
        alias:'t'
    },
    body: {
        describe: 'Add the note body',
        demand: true,
        alias: 'b'
    }
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: argvOptions.title,
        body: argvOptions.body
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: argvOptions.title
    })
    .command('remove', 'Remove a note', {
        title: argvOptions.title
    })
    .help()
    .argv

const command = process.argv[2]

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Note created')
        notes.logNote(note)
    } else {
        console.log('Note title taken')
    }
} else if (command === 'list') {
    const allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note) => notes.logNote(note))
} else if (command === 'read') {
    const note = notes.getNote(argv.title)
    if (note) {
        console.log('Note was found')
        notes.logNote(note)
    } else {
        console.log('Note was not found')
    }
} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title)
    const message = noteRemoved ? "Note was removed" : "Note not found"
    console.log(message)
} else {
    console.log('Command not recognized')
}