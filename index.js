// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "Enter your README title: ",
    "Enter a description for your application: ",
    "Enter installation instructions: ",
    "Enter your usage instructions: ",
    "Enter an img link of a screenshot for your application: ",
    "Please choose a license: ",
    "Enter how to contribute: ",
    "Include any tests: ",
    "Enter your GitHub username: ",
    "Enter your email address: "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
