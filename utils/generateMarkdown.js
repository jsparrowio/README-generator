// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  if (license === "Apache 2.0 License") {
      licenseBadge = `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
      `;
  } else if (license === "MIT License") {
      licenseBadge = `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      `;
  } else if (license === "GNU GPL v3 License") {
      licenseBadge = `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
      `;
  } else if (license === "BSD 3-Clause License")  {
      licenseBadge = `
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
      `;
  } else {
      licenseBadge = " ";
  }
  return licenseBadge;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License'){
  const licenseLink = `
- [License](#license)`;
  return licenseLink;
  } else {
      const licenseLink = '';
      return licenseLink;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License'){
  const licenseSection = `
## License
This project uses ${license}.

Please refer to LICENSE file for more information.
`
return licenseSection;} else {
    const licenseSection = '';
    return licenseSection;
}
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
${licenseBadge}           
## Description
  
${data.description}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)${licenseLink}
- [Contributing](#contributing)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
  
${data.installation}
  
## Usage
  
${data.usage}
${licenseSection} 
## Contributing
  
${data.contributing}
  
## Credits
  
${data.credits}
  
## Tests
  
${data.tests}
  
## Questions
  
If you have any additional questions, please contact me at:
  
[GitHub](https://www.github.com/${data.github})
  
[${data.email}](mailto:${data.email})`;
}

// Exports module for import
export default generateMarkdown;
