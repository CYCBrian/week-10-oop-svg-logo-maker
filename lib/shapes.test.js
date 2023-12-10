const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
  it('should render a circle SVG element with the specified shape color', () => {
    const shapeColor = 'blue';
    const circle = new Circle();
    circle.setColor(shapeColor);
    const svgCode = circle.render();
    expect(svgCode).toEqual('<circle cx="150" cy="150" r="150" fill="blue"/>');
  });
});

describe('Square', () => {
  it('should render a square SVG element with the specified shape color', () => {
    const shapeColor = 'blue';
    const square = new Square();
    square.setColor(shapeColor);
    const svgCode = square.render();
    expect(svgCode).toEqual('<rect x="0" y="0" width="300" height="300" fill="blue"/>');
  });
});

describe('Triangle', () => {
  it('should render a triangle SVG element with the specified shape color', () => {
    const shapeColor = 'blue';
    const triangle = new Triangle();
    triangle.setColor(shapeColor);
    const svgCode = triangle.render();
    expect(svgCode).toEqual('<polygon points="150 0,300 200,0 200" fill="blue"/>');
  });
});
