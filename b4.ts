// Define the Geometry interface
interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

// Define the Circle class
class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Define the Rectangle class
class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
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