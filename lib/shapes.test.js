const { Triangle, Square, Circle } = require("./shapes");

// test Triangle render
describe("Shape", () => {
  it("should change triangle colour", () => {
    const shape = new Triangle("blue");
    expect(shape.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`
    );
  });
});

// test Square render
describe("Shape", () => {
  it("should change square colour", () => {
    const shape = new Square("green");
    expect(shape.render()).toEqual(
      `<rect x="70" y="20" width="160" height="160" fill="green" />`
    );
  });
});

// test Circle render
describe("Shape", () => {
  it("should change circle colour", () => {
    const shape = new Circle("red");
    expect(shape.render()).toEqual(
      `<circle cx="150 " cy="100" r="80" fill="red" />`
    );
  });
});
