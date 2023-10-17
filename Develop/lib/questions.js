
questions= [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for text: ',
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword (or a hexadecimal number): ',
    
},
{
    type: 'list',
    name: 'shape',
    choices: ['circle', 'triangle', 'square'],
    message: 'Please choose one of the shapes:',
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword (or a hexadecimal number) for shape:',
},
]

module.exports= questions;