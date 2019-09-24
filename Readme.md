# Notes-App(CLI)

This is a note taking CLI app with 4 commands

### Installation

Install all dependencies and devDependencies

```sh
$ cd notes-app
$ npm install -d
```
### Usage

Notes-app uses the following commands

* add
Add a new note
```sh
$ node app.js add --title='title of note' --body='note content'
```
* list
List all stored note titles
```sh
$ node app.js list
```
* read
Display note with given title
```sh
$ node app.js read --title='title of note'
```
* remove
Remove note with given title
```sh
$ node app.js remove --title='title of note'
```
