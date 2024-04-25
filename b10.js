"use strict";
class Memberr {
    constructor(name, id, status) {
        this.name = name;
        this.id = id;
        this.status = status;
    }
}
  
class Library1 {
    constructor() {
        this.members = [];
    }

    registerMember(name, id) {
        const newMember = new Memberr(name, id, 'active');
        this.members.push(newMember);
    }

    blockMember(id) {
        const member = this.members.find((m) => m.id === id);
        if (member) {
            member.status = 'blocked';
        }
    }

    showMembers() {
        console.log('All members:');
        this.members.forEach((member) => {
            console.log(`Name: ${member.name}, ID: ${member.id}, Status: ${member.status}`);
        });
    }
}
  
const library = new Library1();
library.registerMember('Alice', 1);
library.registerMember('Bob', 2);
library.registerMember('Charlie', 3);
  
library.showMembers();
library.blockMember(2);
library.showMembers();