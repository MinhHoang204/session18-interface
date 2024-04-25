"use strict";
// Define the changeSpeed interface
class Vehicle1 {
    constructor(speed) {
        this.speed = speed;
    }

    speedUp() {
        this.speed += 10;
    }

    slowDown() {
        this.speed -= 10;
    }

    stop() {
        this.speed = 0;
    }

    getSpeed() {
        return this.speed;
    }
}

// Create an instance of Vehicle
let vehicle = new Vehicle1(60);

// Speed up
vehicle.speedUp();
console.log("Speed after speed up:", vehicle.getSpeed());

// Slow down
vehicle.slowDown();
console.log("Speed after slow down:", vehicle.getSpeed());

// Stop
vehicle.stop();
console.log("Speed after stop:", vehicle.getSpeed());