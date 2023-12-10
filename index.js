const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const svgPrompts = [
    {
        type:"list",
        name:"shapeType",
        message:"Select shape of logo.",
        choices:["Circle", "Square", "Triangle"]
    },
    {
        type:"input",
        name:"shapeColor",
        message:"Input color of logo (color keyword or hexadecimal number)."
    },
    {
        type:"input",
        name:"textInput",
        message:"Input text of logo (max 3 characters)."
    },
    {
        type:"input",
        name:"textColor",
        message:"Input color of text (color keyword or hexadecimal number)."
    }
]

function createSvgFile(filename, data) {
    let shape;
    if (data.shapeType === "Circle") {
        shape = new Circle();
    } else if (data.shapeType === "Square") {
        shape = new Square();
    } else if (data.shapeType === "Triangle") {
        shape = new Triangle();
    }  
    shape.setColor(data.shapeColor);
  
    const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="100" font-size="80" text-anchor="middle" dominant-baseline="middle" fill="${data.textColor}">${data.textInput}</text>
    </svg>`;
  
    fs.writeFile(filename, svgString, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Generated logo.svg");
        }
    });
  }

function generateSvg(){
    inquirer.prompt(svgPrompts).then((data) => {
        if (data.textInput.length > 3){
            console.log("Please enter a maximum of 3 characters.")
            generateSvg()
        } else {
            console.log(data)
            createSvgFile("logo.svg", data)
        }
    })
}

generateSvg()