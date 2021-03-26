const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {type: 'input', name: 'title', message: 'What is the title of your app?'},
        {type: 'input', name: 'description', message: 'What would you like for your description to say?'},
        {type: 'input', name: 'tableOfContents', message: 'What elements would you like to be in the table of contents?'}, //need to specify somewhere how to enter each item, ie.. each section with a space betweeen ?
        {type: 'input', name: 'installation', message: 'What instructions do you have for installation information?'},
        {type: 'input', name: 'usage', message: 'Please describe how to use your app.'},
        {type: 'list', name: 'license', message: 'Please choose any licenses you used.', choices: ['None', 'MIT', 'GNU'] },
        {type: 'input', name: 'contributions', message: 'Who made the app the readme will be for?'},
    ])
    .then((data) => {
        const readme =
`
# ${data.title}

## Description
${data.description}

## Table of Contents
${data.tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## Licenses
${data.license}

## Contributers
${data.contributions}
`;

        fs.writeFile('ReadmeTest.md', readme, (err) =>
           err ? console.error(err) : console.log('Success!'));
        console.log(readme);
    });