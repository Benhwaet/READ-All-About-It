// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please describe your project, including your motivation, what it solves, and what your learned.",
  },
  {
    type: "input",
    name: "installation",
    message: "What steps must be followed to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions on how to use your project",
  },
  {
    type: "input",
    name: "contribute",
    message: "Who can contribute to your project and how can they do so?",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Did you write any tests for your application? If so, provide examples on how to run them here.",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "The Unlicense",
      "The Do What the Fuck You Want to Public License",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message:
      "Please enter your email address to be contacted with user questions",
    //validate-email-inquirer.prompt gist from Amitabh-K/index.js
    validate: function (email) {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      if (valid) {
        console.log("Great job");
        return true;
      } else {
        console.log(".  Please enter a valid email");
        return false;
      }
    },
  },
];

module.exports = { questions };
