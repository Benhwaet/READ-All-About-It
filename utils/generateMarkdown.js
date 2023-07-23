
//License list and quick descriptions taken from <https://choosealicense.com/licenses/>
//License badge gists taken from lukas-h's license-badges.md on GitHub Gist
//<https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba>
const licenses = {
    GNU_AGPLv3: 
        {
        badge:
        '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        link: 'https://www.gnu.org/licenses/agpl-3.0',
        summary:
        'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.',
        },
    GNU_GPLv3: 
        {
        badge:
        '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        link: 'https://www.gnu.org/licenses/gpl-3.0',
        summary: 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.'
        },
    GNU_LGPLv3:
        {
        badge:
        '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
        link: 'https://www.gnu.org/licenses/lgpl-3.0',
        summary: 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.'
        },
    Mozilla: 
        {
        badge:
        '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        link: 'https://opensource.org/licenses/MPL-2.0',
        summary: 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.'
        },
    Apache: 
        {
        badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
        link: 'https://opensource.org/licenses/Apache-2.0',
        summary: 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
        },
    
    MIT: 
        {
        badge:
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        link: 'https://opensource.org/licenses/MIT',
        summary: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code'
        },
    Unlicense: 
        {
        badge:
        '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
        link: 'http://unlicense.org',
        summary: 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.'
        },
    WTFPL: {
        badge:
        '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
        link: 'http://www.wtfpl.net/about',
        summary: "The Do What the Fuck You Want to Public License"
        },
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// License badge template from <https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba>
// formatting and confirmation I was on the right track helped by classmate Alex McKinnon's GitHub Repo <https://github.com/aedelfrid/README-GEN/tree/main>
function renderLicenseBadge(license) {
  if (license === "GNU APGLv3") {
    return `${licenses.GNU_AGPLv3.badge}`;
  } 
  else if (license === "GNU GPLv3") {
    return `${licenses.GNU_GPLv3.badge}`;
  } 
  else if (license === "GNU LGPLv3") {
    return `${licenses.GNU_LGPLv3.badge}`;
  } 
  else if (license === "Mozilla Public License 2.0") {
    return `${licenses.Mozilla.badge}`;
  } 
  else if (license === "Apache License 2.0") {
    return `${licenses.Apache.badge}`;
  } 
  else if (license === "MIT License") {
    return `${licenses.MIT.badge}`;
  } 
  else if (license === "The Unlicense") {
    return `${licenses.Unlicense.badge}`;
  } 
  else if (license === "WTFPL") {
    return `${licenses.WTFPL.badge}`;
  } 
  else {
    return '';
  }
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU APGLv3") {
    return `${licenses.GNU_AGPLv3.link}`;
  } 
  else if (license === "GNU GPLv3") {
    return `${licenses.GNU_GPLv3.link}`;
  } 
  else if (license === "GNU LGPLv3") {
    return `${licenses.GNU_LGPLv3.link}`;
  } 
  else if (license === "Mozilla Public License 2.0") {
    return `${licenses.Mozilla.link}`;
  } 
  else if (license === "Apache License 2.0") {
    return `${licenses.Apache.link}`;
  } 
  else if (license === "MIT License") {
    return `${licenses.MIT.link}`;
  } 
  else if (license === "The Unlicense") {
    return `${licenses.Unlicense.link}`;
  } 
  else if (license === "WTFPL") {
    return `${licenses.WTFPL.link}`;
  } 
  else {
    return '';
  }
};
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSummary(license){
if (license === "GNU APGLv3") {
  return `${licenses.GNU_AGPLv3.summary}`;
} 
else if (license === "GNU GPLv3") {
  return `${licenses.GNU_GPLv3.summary}`;
} 
else if (license === "GNU LGPLv3") {
  return `${licenses.GNU_LGPLv3.summary}`;
} 
else if (license === "Mozilla Public License 2.0") {
  return `${licenses.Mozilla.summary}`;
} 
else if (license === "Apache License 2.0") {
  return `${licenses.Apache.summary}`;
} 
else if (license === "MIT License") {
  return `${licenses.MIT.summary}`;
} 
else if (license === "The Unlicense") {
  return `${licenses.Unlicense.summary}`;
} 
else if (license === "WTFPL") {
  return `${licenses.WTFPL.summary}`;
} 
else {
  return '';
}};

const renderLicenseSection = (license) => 
`${renderLicenseBadge(license)}

${renderLicenseSummary(license)}

<${renderLicenseLink(license)}>
`;

// TODO: Create a function to generate markdown for README
const generateREADME = ({
  title,
  description,
  installation,
  usage,
  contribute,
  tests,
  license,
  username,
  email,
}) =>
  `# ${title}

## Description

${description}

## Table of Contents

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

## Contribute

${contribute}

## Tests

${tests}

## License

### ${license}

${renderLicenseSection(license)}

## Questions

You can reach me through my GitHub or by email 
if you have and questions or comments.

GitHub: <https://www.github.com/${username}>

email: <${email}>`;

module.exports = generateREADME, renderLicenseSection;