// Define the Circle class
class Circle {
    // Constructor to initialize the shape color
    constructor(shapeColor) {
        this.shapeColor = ""; // Initialize the shape color
    }
    // Method to set the shape color
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    // Method to render the SVG representation of the circle
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`;
    }
}
// Define the Square class
class Square {
    // Constructor to initialize the shape color
    constructor(shapeColor) {
        this.shapeColor = ""; // Initialize the shape color
    }
    // Method to set the shape color
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    // Method to render the SVG representation of the square
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`;
    }
}
// Define the Triangle class
class Triangle {
    // Constructor to initialize the shape color
    constructor(shapeColor) {
        this.shapeColor = ""; // Initialize the shape color
    }
    // Method to set the shape color
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    // Method to render the SVG representation of the triangle
    render() {
        return `<polygon points="150 0,300 135,0 135" fill="${this.shapeColor}"/>`;
    }
}
// Export the classes
module.exports = { Circle, Square, Triangle };
