// Import the required packages and modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');
// Define the prompts for collecting user input
const svgPrompts = [
  {
    type: "list",
    name: "shapeType",
    message: "Select shape of logo.",
    choices: ["Circle", "Square", "Triangle"]
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Input color of logo (color keyword or hexadecimal number)."
  },
  {
    type: "input",
    name: "textInput",
    message: "Input text of logo (max 3 characters)."
  },
  {
    type: "input",
    name: "textColor",
    message: "Input color of text (color keyword or hexadecimal number)."
  }
];
// Function to create the SVG file
function createSvgFile(filename, data) {
  let shape;
  // Create an instance of the corresponding shape class based on user input
  if (data.shapeType === "Circle") {
    shape = new Circle();
  } else if (data.shapeType === "Square") {
    shape = new Square();
  } else if (data.shapeType === "Triangle") {
    shape = new Triangle();
  }
  // Set the shape color
  shape.setColor(data.shapeColor);
  // Generate the SVG string
  const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="100" font-size="80" text-anchor="middle" dominant-baseline="middle" fill="${data.textColor}">${data.textInput}</text>
  </svg>`;
  // Write the SVG string to the file
  fs.writeFile(filename, svgString, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}
// Function to generate the SVG
function generateSvg() {
  // Prompt the user for input
  inquirer.prompt(svgPrompts).then((data) => {
    if (data.textInput.length > 3) {
      console.log("Please enter a maximum of 3 characters.");
      generateSvg();
    } else {
      console.log(data);
      createSvgFile("logo.svg", data);
    }
  });
}
// Call the generateSvg function to start the application
generateSvg();
