class SVG {
    constructor(){
        this.textEl = "";
        this.shapeEl = "";
    }

    setText(text,textColor){
         if(text.length > 3){
        throw new Error("Text must not exceed 3 characters.")
        } 
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShape(shape){
        this.shapeEl = shape.render();
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
}
module.exports = SVG
