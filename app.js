/* @flow */
/* eslint-disable react/wrap-multilines */
/* eslint-disable react/require-extension */
/* eslint-disable react/jsx-sort-prop-types */

const chalk =  require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

const log = console.log;

//customize yargs version
yargs.version('1.1.0');


//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: `Note's main content`,
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
        // log('Title: ' + argv.title);
        // log("Notes' Body: " + argv.body);
    }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
        //log('Removing the note!');
    }
});
//create a list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        //log('Listing all notes!');
        notes.listNotes();
    }
});

//create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

//add, remove, read, list


yargs.parse();
//log(yargs.argv);


//log(process.argv);