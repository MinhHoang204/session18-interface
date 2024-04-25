"use strict";
// Define the Geometry interface
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Define the Circle class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Example usage
let circle = new Circle(5);
console.log("Circle area:", circle.calculateArea());
console.log("Circle perimeter:", circle.calculatePerimeter());

let rectangle = new Rectangle(4, 6);
console.log("Rectangle area:", rectangle.calculateArea());
console.log("Rectangle perimeter:", rectangle.calculatePerimeter());