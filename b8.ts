class Student4 {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
}

class classroom3 {
    private students: Student4[];
    private allStudents: Student4[];

    constructor() {
        this.students = [];
        this.allStudents = [];
    }

    addStudent(student: Student4) {
        this.students.push(student);
        this.allStudents.push(student);
    }

    removeStudent(id: number) {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            this.allStudents.push(removedStudent);
        }
    }

    editStudent(id: number, newName: string) {
        const student = this.students.find(student => student.getId() === id);
        if (Student4) {
            Student4.name = newName;
        }
    }

    showStudents() {
        console.log("Students in the classroom:");
        for (let student of this.students) {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        }
    }

    showAllStudents() {
        console.log("All Students:");
        for (let student of this.allStudents) {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        }
    }
}

// Create instances of Classroom and add students to them
const classroom = new Classroom();
classroom1.addStudent(new Student3(1, "Alice"));
classroom1.addStudent(new Student3(2, "Bob"));
classroom1.addStudent(new Student3(3, "Charlie"));

// Test removeStudent and editStudent methods
console.log("Before removing or editing:");
classroom1.showStudents();

classroom1.removeStudent(2);
console.log("\nAfter removing student with ID 2:");
classroom1.showStudents();

classroom1.editStudent(1, "Alex");
console.log("\nAfter editing student with ID 1:");
classroom1.showStudents();

console.log("\nAll students:");
classroom1.showAllStudents();