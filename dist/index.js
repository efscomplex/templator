"use strict";
var questions = require('./questions');
var handler = require('./handler');
var inquirer = require('inquirer');
inquirer
    .prompt(questions)
    .then(handler)
    .catch(function (err) {
    console.log(err);
});
