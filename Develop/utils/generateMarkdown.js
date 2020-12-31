// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
    return (`# ${data.title}
    ![badmath](https://img.shields.io/badge/license-${data.license}-green)
    
    # Welcome to the ${data.title}'s Project Page! : 

    ## Description
      ${data.desc}
   
      ## Table of Contents
    Navigate through the README Using the Table of Contents : 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributing)
    * [Badges](#badges)
    * [Tests](#tests)
    * [Questions](#questions)
   
    ## Installation
      ${data.instructions}
   
      ## Usage
      ${data.usage}
    
      ## License
    ${data.license}
    
    ## Contributing
    ${data.contribution_guideline}
    
    ## Badges
    ![badmath](https://img.shields.io/badge/license-${data.license}-green)
    
    ## Tests
    ${data.test_instruct}
    ## Questions
    [Link to Creator Github](https://github.com/${data.github_name})
    Please forward all questions about the project to <${data.email}> 
    `)
  }
  



module.exports = generateMarkdown;
