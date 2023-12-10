class Circle {
    constructor(shapeColor) {
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<circle cx="150" cy="150" r="150" fill="${this.shapeColor}"/>`;
    }
}

class Square {
    constructor(shapeColor) {
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<rect x="0" y="0" width="300" height="300" fill="${this.shapeColor}"/>`
    }
}

class Triangle {
    constructor(shapeColor) {
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<polygon points="150 0,300 200,0 200" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Circle, Square, Triangle};