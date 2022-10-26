"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.heigth = height;
    }
    getArea() {
        return this.width * this.heigth;
    }
}
const shapes = [
    new Circle(5),
    new Rectangle(10, 5),
];
shapes.forEach(shape => console.log(shape.getArea()));
