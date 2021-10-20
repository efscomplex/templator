#!/usr/bin/env node

const questions = require('./questions')
const handler = require('./handler')
const inquirer = require('inquirer')

inquirer
   .prompt(questions)
   .then(handler)
   .catch((err) => {
      console.log(err)
   })
