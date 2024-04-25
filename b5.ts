// Define the changeSpeed interface
interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

// Define the Vehicle class
class Vehicle1 implements ChangeSpeed {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    speedUp(): void {
        this.speed += 10;
    }

    slowDown(): void {
        this.speed -= 10;
    }

    stop(): void {
        this.speed = 0;
    }

    getSpeed(): number {
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