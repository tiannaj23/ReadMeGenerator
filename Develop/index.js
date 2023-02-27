// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer =require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's the title of your application?"
    },

    {
        type: 'input',
        name: 'description',
        message: "How would you describe this application?"
    },

    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project?"
    },

    {
        type: 'input',
        name: 'usage',
        message: `How is this application used? Include screenshots as needed. To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax 

        md
        ![alt text](assets/images/screenshot.png)
        `
    },

    {
        type: 'input',
        name: 'contributing',
        message: "List any contributors to the application."
    },

    {
        type: 'input',
        name: 'email',
        message: "Enter your email:"
    },

    {
        type: 'input',
        name: githu
    }



    {
        type: 'list',
        name: 'license',
        message: "What's the app license under?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log("Generating ReadMe")
        writeToFile("README.md", generateMarkdown({...answers}))
    })

}

// Function call to initialize app
init();
