// Require
const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile,} = require('./utils/generate-page');

//questions
inquirer 
.prompt ([ 
      {
        type: 'input',
        name: 'title',
        message: 'What is your title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter title of project to continue!');
            return false;
          }
        }
      },
     //Project Description
     {
         type: 'input',
         name: 'description',
         message: 'Provide a description of the project. (Required)',
         validate: descriptionInput => {
             if (descriptionInput) {
                 return true;
             } else {
                 console.log('You need to provide a description!');
                 return false;
             }
         }
     },

     {
         type: 'input',
         name: 'toc',
         message: 'Please add table of contents. (Required)',
         validate: tocInput => {
             if (tocInput) {
                 return true;
             } else {
                 console.log('You need to provide a table of contents');
                 return false;
             
             }
         }
     },

     {
         type: 'input',
         name: 'installation',
         message: 'How do you install your project? (Required)',
         validate: installationInput => {
             if (installationInput) {
                 return true;
             } else {
                 console.log('You need to provide installation information!');
                 return false;
             }
         }
     },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use product');
                return false;
            }
            
        }
    },
{
    type: 'input',
    name: 'contribution',
    message: 'Who contributed to the project? (Required)',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else{
            console.log('You need to provide information on who contributed!');
            return false;
        }
        
    }
},

{
    type: 'input',
    name: 'testing',
    message: 'How do you test this project? (Required)',
    validate: testingInput => {
        if (testingInput) {
            return true;
        } else {
            console.log('You need to provide how to test project!');
            return false;
        }
        
    }
}])

promptUser()
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageMD => {
    return writeFile(pageHTML);
  })