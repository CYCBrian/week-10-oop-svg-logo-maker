const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./shapes');

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

function writeToFile(filename, data){
// TODO: Function to create file with svg logo.
}

function generateSvg(){
    inquirer.prompt(svgPrompts).then((data) => {
        console.log(data)
        writeToFile("logo.svg", data)
    })
}

generateSvg()