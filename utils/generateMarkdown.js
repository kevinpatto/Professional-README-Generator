// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case 'ISC':
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case 'IBM':
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    case 'N/A':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return "[License: MIT](https://opensource.org/license/mit/)";
    case 'ISC':
      return "[License: ISC](https://opensource.org/license/isc-license-txt/)";
    case 'IBM':
      return "[License: IPL 1.0](https://opensource.org/license/ibmpl-php/)";
    case 'N/A':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## License
${renderLicenseLink(license)}
## Badges
${renderLicenseBadge(license)}
`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}

![Screenshot to application](${data.usageImage})
## Credits
${data.credits}
${renderLicenseSection(data.license)}
## How to Contribute
${data.contribute}
## Tests
${data.tests}
## Questions
Please contact me, either on my [Github](https://github.com/${data.username}) or my [email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
