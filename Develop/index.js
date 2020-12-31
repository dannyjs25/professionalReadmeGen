const inquirer = require("inquirer");
const fs = require("fs");
// const open = require("open")
const util = require("util");
const generateMarkdown = require("./utild/generateMarkdown")
const writeAsync = util.promisify("./utils/generateMarkdown")
// array of questions for user
const questions = [
    {
        message: "what is your name",
        name: "name"
    },
    {
        message: "what is your project title?",
        name: "title"
    },
    {
        message: "what is your project description?",
        name: "description"
    },
    {
        message: "What are your project installation instructions?",
        name: "instructions"
    },
    {
        message: "What is your project usage information?",
        name:"info"
    },
    {
        message: "What is your projects contribution guidelines?",
        name: "contri_guideline"
    },
    {
        message: "What are the testing instructions for your application?",
        name: "test_instruct"
    },
    {
        message: "What license does your application have?",
        name: "license",
        type: "list",
        choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"]
    },
    {
        message: "What is your Github username?",
        name: "github_username"
    },
    {
        message: ""
    }
]

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    const htmlString = generateMarkdown(answers);

    await writeAsync(answer.name + ".md", htmlString)

}

// function call to initialize program
init(); 
    

