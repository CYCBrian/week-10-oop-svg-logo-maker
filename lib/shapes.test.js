// Import the required shape classes from the shapes module
const { Circle, Square, Triangle } = require('./shapes');
// Test the Circle class
describe('Circle', () => {
  it('should render a circle SVG element with the specified shape color', () => {
    const shapeColor = 'blue'; // Define the shape color
    const circle = new Circle(); // Create a new instance of the Circle class
    circle.setColor(shapeColor); // Set the shape color
    const svgCode = circle.render(); // Render the SVG code
    expect(svgCode).toEqual('<circle cx="150" cy="100" r="100" fill="blue"/>'); // Check if the SVG code matches the expected value
  });
});
// Test the Square class
describe('Square', () => {
  it('should render a square SVG element with the specified shape color', () => {
    const shapeColor = 'blue'; // Define the shape color
    const square = new Square(); // Create a new instance of the Square class
    square.setColor(shapeColor); // Set the shape color
    const svgCode = square.render(); // Render the SVG code
    expect(svgCode).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue"/>'); // Check if the SVG code matches the expected value
  });
});
// Test the Triangle class
describe('Triangle', () => {
  it('should render a triangle SVG element with the specified shape color', () => {
    const shapeColor = 'blue'; // Define the shape color
    const triangle = new Triangle(); // Create a new instance of the Triangle class
    triangle.setColor(shapeColor); // Set the shape color
    const svgCode = triangle.render(); // Render the SVG code
    expect(svgCode).toEqual('<polygon points="150 0,300 135,0 135" fill="blue"/>'); // Check if the SVG code matches the expected value
  });
});
