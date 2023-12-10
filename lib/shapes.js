class Circle {
    constructor(shapeColor) {
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`;
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
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`
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
        return `<polygon points="150 0,300 135,0 135" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Circle, Square, Triangle};