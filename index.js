// Require
const inquirer = require('inquirer');

//questions
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter name of project to continue!');
            return false;
          }
        }
      },
     //Project Description
     {
         type: 'input',
         name: 'description',
         message: 'Provide a description of the project. (Required)',
         validate: desciptionInput => {
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
        message: 'How do you use this project'),
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use product');
                return false;
            }
            }
        }
    },