const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

const svg = (data, miniSVG) =>
  `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" style="opacity:0"/>

${miniSVG}

<text x="150" y="125" font-size="50" text-anchor="middle" fill="${data.fontColor}">${data.text}</text>

</svg>`;

function main() {
  inquirer
    .prompt([
      // questions for users
      // text characters input
      {
        type: "input",
        name: "text",
        message: "What 3 charaters would you like to display on your logo?",
      },
      // shape: a list of shapes
      {
        type: "list",
        name: "shapes",
        message: "What shapes would you like to choose?",
        choices: ["Triangle", "Square", "Circle"], // new Circle, new Triangle
      },
      // text-color: color keyword
      {
        type: "input",
        name: "fontColor",
        message: "What colours would you like to use for your text?",
      },
      // shape-color: color keyword
      {
        type: "input",
        name: "shapeColor",
        message: "What colours would you like to use on your chosen shapes?",
      },
    ])
    .then((data) => {
      console.log(data);
      if (data.text.length === 3) {
        // output text "Generated logo.svg" is printed in the command line
        // generate SVG named "logo.svg"

        let someShape;
        // choices: "Triangle", "Square", "Circle"
        switch (data.shapes) {
          case "Triangle":
            // if(data.shapes === "Triangle")
            someShape = new Triangle(data.shapeColor);
            break;
          case "Square":
            someShape = new Square(data.shapeColor);
            break;
          case "Circle":
            someShape = new Circle(data.shapeColor);
            break;
        } // switch
        let miniSVG = someShape.render();

        fs.writeFile("logo.svg", svg(data, miniSVG), (err) =>
          err ? console.log(err) : console.log("Generated logo.svg")
        );
      } else {
        console.log("Must be 3 characters!");
      }
    });
}
main();
