// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import colors from 'colors';
import generateMarkdown from './utils/generateMarkdown.js';

// Creates an array of questions for user input
const questions = [
    {
        type: "input",
        message: colors.bgCyan("What is the title of your project?"),
        name: "title",
    },
    {
        type: "input",
        message: colors.bgCyan("Provide a description of your project:"),
        name: "description",
    },
    {
        type: "input",
        message: colors.bgCyan("Provide installation instructions for your project:"),
        name: "installation",
    },
    {
        type: "input",
        message: colors.bgCyan("What is the proper usage instructions for your project?"),
        name: "usage",
    },
    {
        type: "list",
        message: colors.bgCyan("What is license does your project use?"),
        name: "license",
        choices:["Apache 2.0 License","MIT License","GNU GPL v3 License","BSD 3-Clause License", "No License"]
    },
    {
        type: "input",
        message: colors.bgCyan("Provide instructions on how to contribute to your project:"),
        name: "contributing",
    },
    {
        type: "input",
        message: colors.bgCyan("Provide details on what credit is owed for development of the project:"),
        name: "credits",
    },
    {
        type: "input",
        message: colors.bgCyan("Provide details on how to test your project:"),
        name: "tests",
    },
    {
        type: "input",
        message: colors.bgCyan("Provide your GitHub Username:"),
        name: "github",
    },
    {
        type: "input",
        message: colors.bgCyan("Provide your email:"),
        name: "email",
    },
];

// Function to write README file
// Uses FS module
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
    err ? console.log(err) : console.log(colors.bgGreen("\nYour README has been generated successfully!"))
)}

// Function to initialize app
// Uses inquirer module and imported module from generateMarkdown
function init() {
    console.log(colors.bgMagenta("Welcome to the README Generator! \n A program to generate a professional README for your project! \n"));
    inquirer 
        .prompt(questions)
        .then((response) => {
            const generatedREADME = generateMarkdown(response);
            writeToFile('GeneratedREADME.md', generatedREADME)
        });
}

// Function call to initialize app
init();