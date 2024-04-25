"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `hình là ${this.name}`;
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log("chiều dài", this.width);
        console.log("chiều rộng", this.height);
    }
}

let rectangle1 = new Rectangle("hình tròn", 5, 6);
console.log("tên", rectangle1.getName());
rectangle1.getSize();