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

* Add a new note (add)
```sh
$ node app.js add --title='title of note' --body='note content'
```
* List all stored note titles (list)
```sh
$ node app.js list
```
* Display note with given title (read)
```sh
$ node app.js read --title='title of note'
```
* Remove note with given title (remove)
```sh
$ node app.js remove --title='title of note'
```
