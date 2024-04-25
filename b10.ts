class Memberr {
    constructor(public name: string, public id: number, public status: string) {}
}
  
class Library1 {
    private members: Memberr[] = [];
  
    public registerMember(name: string, id: number) {
      const newMemberr = new Memberr(name, id, 'active');
      this.members.push(newMemberr);
    }
  
    public blockMemberr(id: number) {
      const member = this.members.find((m) => m.id === id);
      if (member) {
        member.status = 'blocked';
      }
    }
  
    public showMembers() {
      console.log('All members:');
      this.members.forEach((member) => {
        console.log(`Name: ${member.name}, ID: ${member.id}, Status: ${member.status}`);
      });
    }
}
  
const Library = new Library();
Library.registerMember('Alice', 1);
Library.registerMember('Bob', 2);
Library.registerMember('Charlie', 3);
  
Library.showMembers();
Library.blockMember(2);
Library.showMembers();