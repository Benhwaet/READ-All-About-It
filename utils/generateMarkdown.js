const licenses = require('./licenses');
const questions = require('./promptQuestions');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// License badge template from <https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba>
const renderLicenseBadge = (license) => {
  if (license === "GNU APGLv3") {
    return `[![License: GNU APGLv3](${licenses.badge})](${licenses.content})`
  } 
  else if (license === "GNU GPLv3") {
    return `[![License: GNU GPLv3](${licenses.badge})](${licenses.content})`
  } 
  else if (license === "GNU LGPLv3") {
    return `[![License: GNU LGPLv3](${licenses.badge})](${licenses.content})]`
  } 
  else if (license === "Mozilla Public License 2.0") {
    return `[![License: ](${licenses.badge})](${licenses.content})]`
  } 
  else if (license === "Apache License 2.0") {
    return `[![License: Mozilla Public License 2.0](${licenses.badge})](${licenses.content})]`
  }
  else if (license === "MIT License") {
    return `[![License: MIT License](${licenses.badge})](${licenses.content})]`
  }
  else if (license === "The Unlicense") {
    return `[![License: The Unlicense](${licenses.badge})](${licenses.content})]`
  }
  else if (license === "WTFPL") {
    return `[![License: WTFPL](${licenses.badge})](${licenses.content})]`
  } else {
    return `''`
  }
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
const renderLicenseLink = (license) => {
  let link = `${licenses.content}`;
  
  if (license === "GNU APGLv3") {
    return link
  } 
  else if (license === "GNU GPLv3") {
    return link
  } 
  else if (license === "GNU LGPLv3") {
    license = licenses.name;
    return link
  } 
  else if (license === "Mozilla Public License 2.0") {
    return link
  } 
  else if (license === "Apache License 2.0") {
    return link
  }
  else if (license === "MIT License") {
    return link
  }
  else if (license === "The Unlicense") {
    return link
  }
  else if (license === "WTFPL") {
    return link
  } else {
    return `''`
  }
};

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
const generateREADME = ({title, description, installation, usage, image, 
contribute, tests, license, username, email}) =>
 `# ${title}

  ## Description

  ${description}

 ## Table of Content
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
 
  ## Installation
  
  ${installation}
  
  ## Usage

  ${usage}

  ${image}

  ## Contribute

  ${contribute}

  ## Tests

  ${tests}

  ## License

  ${license}

  ## Questions

  You can reach me through my GitHub or by e-mail 
  if you have and questions or comments.
  GitHub: <https://www.github.com/${username}>
  e-mail: ${email}
`;


module.exports = { generateREADME };
