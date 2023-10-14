const { Circle, Triangle, Square } = require('./shapes.js');

function getShapes(response) {
    if (response.shape === 'circle') {
        let ShapeChoice = new Circle(response.text, response.textcolor, response.shapecolor);
        return ShapeChoice.render();
    } else if (response.shape === 'triangle') {
        let ShapeChoice = new Triangle(response.text, response.textcolor, response.shapecolor);
        return ShapeChoice.render();
    } else {
        // Assuming 'square' is the default shape when neither 'circle' nor 'triangle' is chosen
        let ShapeChoice = new Square(response.text, response.textcolor, response.shapecolor);
        return ShapeChoice.render();
    }
}

module.exports = getShapes;


