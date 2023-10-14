class Shape {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
}

class Circle extends Shape {
    constructor(text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor);
    }

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>
        `;
    }
}

class Triangle extends Shape {
    constructor(text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor);
    }

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>
        `;
    }
}

class Square extends Shape {
    constructor(text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor);
    }

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="90" y="40" width="120" height="120" fill="${this.shapecolor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>
        `;
    }
}

// Export as an object
module.exports = {
    Circle,
    Triangle,
    Square
};
