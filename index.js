
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const util = require("util");
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
function init() {function promptUser() {
    // TODO: Create an array of questions for user input
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project title?"
          },
          {
            type: "input",
            name: "description",
            message: "Provide a short description explaining the what, why, and how of your project"
          },
          {
            type: "input",
            name: "install",
            message: "What are the steps required to install your project?"
          },
          {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for usage"
          },
          {
            type: "input",
            name: "contributing",
            message: "Would like other developers to contribute to the project? If so, include guidelines for how to do so"
          },

          {
            type: "input",
            name: "test",
            message: "is any test is written, please provide test instructions if applicable"
          },
          {
            type: "list",
            message: "License?",
            name: "license",
            choices: [
              "[MIT License](LICENSE.txt)", 
              "[GNU GPLv3 License](COPYING.txt)", 
            ]
          },
          {
            type: "input",
            name: "email",
            message: "Enter your email address"
          },
          {
            type: "input",
            name: "github",
            message: "Enter your github username"
          }
        ]);
      }

// TODO: Create a function to initialize app. 
function generateREADME(response) {
  console.log(response)
    return `# ${response.projectTitle}
${renderLicenseBadge(response.license)}
      
  #### Table of Contents
  1. [Project Description](#project-description)
  2. [Installation](#installation-instructions)
  3. [Usage](#usage-information)
  4. [Credits](#credits)
  5. [Test Instructions](#test-instructions)
  6. [License](#license)
  7. [Questions](#questions)
  ## Project Description
  * ${response.description} // use a variable dot notation. 
  ## Installation Instructions
  * ${response.install}
  ## Usage Information
  * ${response.use}
  ## Contributing
  * ${response.contribution}
  ## Test Instructions
  * ${response.test}
  ## License
  * licensed under the ${response.license}
  ## Questions
  * For any other questions, please email me at ${response.email}
  * My Github is [${response.github}](http://github.com/${response.github})`;
    
  }

// TODO: Create a function to write README file
promptUser()
.then(function(response) {
  const readme = generateREADME(response);


  return writeToFile("./assets/README.md", readme);
})
.then(function() {
  console.log(" README.md has been created!");
})
.catch(function(err) {
  console.log(err);
});
}

// Function call to initialize app
init();

function renderLicenseBadge(license) {
  if (license === "[MIT License](LICENSE.txt)") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else license === "[GNU GPLv3 License](COPYING.txt)";
  return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
}


// function renderLicenseBadge(license) {
//   if (license === "MIT") {
//     return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
//   } else license === "GNU General Public License v3.0";
//   return `![Github License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
// }