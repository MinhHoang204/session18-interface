abstract class Job {
    type:string;
    constructor(type:string){
        this.type = type;
    }
    printType() : void {
        console.log(this.type);
    }
    abstract calculateSalary():void;
}
class partimeJob extends Job {
    workingHour: number
    constructor(type:string, workingHour:number){
        super(type)
        this.workingHour = workingHour;
    }
    calculateSalary(): void {
        console.log(30000, this.workingHour);
    }
}
class FulltimeJob {
    constructor(type:string){
        super(type)
    }
    calculateSalary():void{
        console.log(10000000)
    }
}
let partime = new partimeJob("Part-time", 10);
let fulltime = new FulltimeJob("Full-time");
partime.printType();
partime.calculateSalary();
fulltime.printType();
fulltime.calculateSalary();