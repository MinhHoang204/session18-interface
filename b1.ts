abstract class Shape{
    name: string;
    constructor(name:string){
        this.name=name
    }
    // Viết theo phương thức normal
    getName(){
        // lấy ra tên của hình
        return `hình là ${this.name}`
    }
}
class Rectangle extends Shape{
    width: number;
    height: number;
    constructor(name:string,width:number,height:number){
        super(name);
        this.width=width;
        this.height=height;
    }
    getSize(): void {
        console.log("chiều dài", this.width);
        console.log("chiều rộng", this.height);
        // return ` chiều dài: ${this.width} và chiều rộng: ${this.height}`
    }
}

let rectangle1 = new Rectangle("hình tròn",5, 6);
console.log("tên", rectangle1.getName());
rectangle1.getSize();