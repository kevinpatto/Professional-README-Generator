// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "Enter your README title: ",
    "Enter a description for your application: ",
    "Enter installation instructions: ",
    "Enter your usage instructions: ",
    "Enter an img link of a screenshot for your application: ",
    "Enter credits: ",
    "Please choose a license: ",
    "Enter how to contribute: ",
    "Include any tests: ",
    "Enter your GitHub username: ",
    "Enter your email address: "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log(`Generated README successfully as ${fileName}`)
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'usageImage'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'credits'
            },
            {
                type: 'list',
                message: questions[6],
                choices: ['MIT', 'ISC', 'IBM', 'N/A'],
                name: 'license'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'contribute'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'tests'
            },
            {
                type: 'input',
                message: questions[9],
                name: 'username'
            },
            {
                type: 'input',
                message: questions[10],
                name: 'email'
            }
        ])
        .then((response) => {
            // console.log(response);
            writeToFile('genREADME.md', response);
        });
}

// Function call to initialize app
init();
