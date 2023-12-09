class Circle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`;
    }
}

class Square {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>`
    }
}

class Triangle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<polygon points="50 15,100 100,0 100" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Circle, Square, Triangle};