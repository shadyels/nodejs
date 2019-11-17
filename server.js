var express = require('express');
var bodyParser = require('body-parser');
var sqlite = require('sqlite3');

var app = express();
var db = new sqlite.Database('projectDatabase.db');

// serialize() ensures that statements are executed one after the other
db.serialize(function () {
// this creates a table
    db.run('CREATE TABLE Contacts first_name TEXT, last_name TEXT, age INTEGER');

    //insert values in the table 'Contacts'
    db.run('INSERT INTO Contacts VALUES ("John", "Doe", 25)')
});
db.close();
