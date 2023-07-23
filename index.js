// Include packages needed for this application 
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = require('./utils/generateMarkdown.js');



// Function to initialize app - taken from NodeJS mini-project code
const init = () => {
    inquirer.prompt(questions)
.then((answers) => {
    const READMEContent = generateREADME(answers);

// TODO: Create a function to write README file
fs.writeFile('README.md', READMEContent, (err) => 
    err ? console.log(err) : console.log('Success!'))
})
};

// // Function call to initialize app
init();
