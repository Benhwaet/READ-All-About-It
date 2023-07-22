// Include packages needed for this application 
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = require('./utils/generateMarkdown.js');
console.log(generateREADME);
// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
     type: 'input',
     name: 'title',
     message: 'What is your project\'s title?'
    },
    {
     type: 'input',
     name: 'description',
     message: 'Please describe your project, including your motivation, what it solves, and what your learned.',
    },
    {
     type: 'checkbox',
     name: 'tableOfContents',
     message: 'Which sections do you wish to include in the table of contents, if any?',
     choices: ['Installation', 'Usage', 'Credits', 'License']   
    },
    {
     type: 'input',
     name: 'installation',
     message: 'What steps must be followed to install your project?'   
    },
    {
     type: 'input',
     name: 'usage',
     message:'Please provide instructions '    
    },
    {
    //License list taken from <https://choosealicense.com/licenses/>
     type: 'list',
     name: 'license',
     message: 'Which license would you like to use?',
     choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License', 
     'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
    'The Unlicense']   
    }
])
.then((answers) => {
    const READMEContent = generateREADME(answers);

// TODO: Create a function to write README file
fs.writeFile('README.md', READMEContent, (err) => 
    err ? console.log(err) : console.log('Success!'))
})

// Function to initialize app - taken from NodeJS mini-project code
// const init = () => {
//     promptUser()
//     .then((answers) => writeFile('genREADME.md', generateMarkdown(answers)))
//     .then (() => console.log('Success!'))
//     .catch((err) => console.error(err));
// };

// // Function call to initialize app
// init();
