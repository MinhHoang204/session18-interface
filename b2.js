"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(this.type);
    }
    calculateSalary() {
        throw new Error("Method not implemented.");
    }
}

class partimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        console.log(30000, this.workingHour);
    }
}

class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        console.log(10000000);
    }
}

let partime = new partimeJob("Part-time", 10);
let fulltime = new FulltimeJob("Full-time");
partime.printType();
partime.calculateSalary();
fulltime.printType();
fulltime.calculateSalary();