// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//START
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your app?',
        },
        {
            type: 'input',
            name: '',
            message: '?',
        },
        {
            type: 'input',
            name: '',
            message: '?',
        },
    ])
    .then((data) => {
        const readme = /* reademe contents here*/ `${data}`
        console.log(readme)
        fs.writeFile('nameOfFile', readme, (err) ? console.log(err) : console.log("All Good!"));
    });