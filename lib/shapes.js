class Shapes {
  constructor(fillColor) {
    this.fillColor = fillColor;
  }
}

class Triangle extends Shapes {
  constructor(fillColor) {
    super(fillColor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}"/>`;
  }
}

class Square extends Shapes {
  constructor(fillColor) {
    super(fillColor);
  }
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.fillColor}" />`;
  }
}

class Circle extends Shapes {
  constructor(fillColor) {
    super(fillColor);
  }
  render() {
    return `<circle cx="150 " cy="100" r="80" fill="${this.fillColor}" />`;
  }
}

// function shapes(fillColor) {
//   this.fillColor = fillColor;
// }

// function Triangle(fillColor) {
//   shapes.call(this, fillColor);
//   this.render = () => {
//     return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}"/>`;
//   };
// }

// function Square(fillColor) {
//   shapes.call(this, fillColor);
//   this.render = () => {
//     return `<rect x="70" y="20" width="160" height="160" fill="${this.fillColor}" />`;
//   };
// }
// function Circle(fillColor) {
//   shapes.call(this, fillColor);
//   this.render = () => {
//     return `<circle cx="150 " cy="100" r="80" fill="${this.fillColor}" />`;
//   };
// }

module.exports = { Triangle, Square, Circle };
