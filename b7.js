"use strict";
class Student3 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}

class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        console.log("Students in the classroom:");
        for (let student of this.students) {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        }
    }
}

// Create 6 instances of Student
const allStudents = [];
allStudents.push(new Student3(1, "Alice"));
allStudents.push(new Student3(2, "Bob"));
allStudents.push(new Student3(3, "Charlie"));
allStudents.push(new Student3(4, "David"));
allStudents.push(new Student3(5, "Eve"));
allStudents.push(new Student3(6, "Frank"));

// Create 2 instances of Classroom and add students to them
const classroom1 = new Classroom();
const classroom2 = new Classroom();

for (let i = 0; i < 3; i++) {
    classroom1.addStudent(allStudents.pop()); // allStudents.pop() will not return undefined
    classroom2.addStudent(allStudents.pop());
}
// Show students in each classroom
classroom1.showStudents();
console.log("-----------------");
classroom2.showStudents();