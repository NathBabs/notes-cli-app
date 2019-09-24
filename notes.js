/*jshint -W087 */
/* @flow */
/* eslint-disable react/wrap-multilines */
/* eslint-disable react/require-extension */
/* eslint-disable react/jsx-sort-prop-types */
/* eslint-disable no-debugger */
const fs =  require('fs');
const chalk = require('chalk');


const addNote =  (title, body) => {
    const notes =  loadNotes();
    //const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

        
        if (duplicateNote === undefined) {
            notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note added!'));
        }else {
            console.log(chalk.bgRed('Note title taken'));
        }
        }; 


const removeNotes = (title) => {
    const notes = loadNotes();
    const filteredNote = notes.filter((note) => note.title !== title);
    
    if (filteredNote.length < notes.length) {
        saveNotes(filteredNote);
        console.log(chalk.green.inverse('Note removed'));
    }else {
        console.log(chalk.bgRed('No note with that title exist'));
    }
};


const listNotes = () => {
    const notes = loadNotes();
    if (notes.length > 0) {
        console.log(chalk.green.inverse( 'Your Notes'));
        notes.forEach(function(note) {
        console.log(note.title);
    });
    } else {
        console.log('Notes are empty!');
    }
};


const readNote = (title) => {
    const note = loadNotes();
    const foundNote = note.find((note) => note.title === title);
    if (foundNote){
        console.log(chalk.inverse.underline(foundNote.title));
        console.log(foundNote.body);
    }else {
        console.log(chalk.red('No Note Found!'));
    }
};


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes =  () => {
    try {
        const dataBuffer =  fs.readFileSync('notes.json');
        const dataJSON =  dataBuffer.toString();
        return JSON.parse(dataJSON); //return object
    } catch (e) {
        return []; //return empty array when file doesn't exist
    }
};


module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
};




