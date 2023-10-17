const SVG = require('./Develop/lib/svg.js');
const inquirer = require('inquirer');
const questions = require('./Develop/lib/questions.js');
const {Circle, Triangle, Square} = require('./Develop/lib/shapes.js');
const { writeFile } = require('fs/promises'); 


function init() {
    inquirer
        .prompt(questions)
        .then(({ text, textColor, shape, shapeColor}) => {
            switch (shape) {
                case 'circle':
                    shape = new Circle();
                    break;

                case 'square':
                    shape = new Square();
                    break;

                default:
                case 'triangle':
                    shape= new Triangle();
                    break;
            }
            shape.setColor(shapeColor);
            const svg = new SVG();
            svg.setText(text,textColor);
            svg.setShape(shape);
            return writeFile('logo.svg', svg.render());
        })
        .then(() => {
            console.log('Generated logo.svg');
        })
        .catch((error) => {
            console.log(error);
        });
}

// Assuming `questions` is defined somewhere in your code
init();
