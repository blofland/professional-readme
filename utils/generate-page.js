const fs = require('fs');

const generateMarkdown = data => {
    return `# ${data.title}
    
    
    ##Description
    ${data.description}
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation 
    ${data.installation}
    ## Usage 
    ${data.usage}
    ## License 
    This project is license under ${data.license}
    ## Contributing 
    ${data.contribution}
    ## Tests
    ${data.testing}
    ## Questions
    You can reach me at ${data.email} with any questions. You can view more of my projects at https://github.com/${data.github}.
  `;
  }
  
  
  // use for importing Markdown in index 
  module.exports = generateMarkdown;
