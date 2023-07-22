// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
const sections = ['title', 'installation', 'usage', 'image', 'credits', 'license', 
'badgeUrl', 'features', 'contribute', 'tests'];

const allSections = [...sections]


// TODO: Create a function to generate markdown for README
const generateREADME = (allSections) =>
 `# ${title}

  ## Description
  ${description}
  
  ## Table of Content
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${installation}
  
  ## Usage

  ${usage}

  ${image}

  ## Credits

  ${credits}

  ## License

  ${license}

  ## Badges

  ![image](${badgeUrl})

  ## Features

  ${features}

  ## Contribute

  ${contribute}

  ## Tests

  ${tests}
`;
console.log(allSections);

module.exports = { generateREADME };
