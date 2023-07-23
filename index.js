// Include packages needed for this application 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is your project\'s title?'
    },
    {
        
    }



];

// TODO: Create a function to write README file
function writeToFile('genREADME.md', data) {
    
}

// Function to initialize app - taken from NodeJS mini-project code
const init = () => {
    promptUser()
    .then((answers) => writeFile('genREADME.md', generateMarkdown(answers)))
    .then (() => console.log('Success!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
//test