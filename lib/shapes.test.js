const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
  it('should render a circle SVG element with the specified shape color', () => {
    const shapeColor = 'blue';
    const circle = new Circle(shapeColor);
    const svgCode = circle.render();
    expect(svgCode).toEqual('<circle cx="25" cy="75" r="20" fill="blue"/>');
  });
});

describe('Square', () => {
    it('should render a circle SVG element with the specified shape color', () => {
        const shapeColor = 'blue';
        const circle = new Square(shapeColor);
        const svgCode = circle.render();
        expect(svgCode).toEqual('<rect x="10" y="10" width="30" height="30" fill="blue"/>');
    });
  });

describe('Triangle', () => {
    it('should render a circle SVG element with the specified shape color', () => {
        const shapeColor = 'blue';
        const circle = new Triangle(shapeColor);
        const svgCode = circle.render();
        expect(svgCode).toEqual('<polygon points="50 15,100 100,0 100" fill="blue"/>');
    });
});