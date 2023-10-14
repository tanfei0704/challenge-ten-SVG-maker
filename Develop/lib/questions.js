
questions= [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for text: ',
    validate: (response) => {
      if (response.length > 3) {
        return 'Text must be three characters or less';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'textcolor',
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
    name: 'shapecolor',
    message: 'Enter a color keyword (or a hexadecimal number) for shape:',
  },
]

module.exports= questions;