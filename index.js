const getShapes = require('./Develop/lib/svgshape.js');
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./Develop/lib/questions.js');

function init() {
    inquirer
    .prompt(questions)
    .then(function(response){
        createSvg(response);
    })
    .catch(function(error){
        console.log(error);
    });
}

function createSvg(response) {
    const svg = getShapes(response);
    fs.writeFile('samplelogo.svg', svg, (err) => {
        if (err) throw err;
        console.log('Created SVG logo!');
    });
    console.log('SVG creation object:', response);
}

// Call the init function to start the prompt
init();
