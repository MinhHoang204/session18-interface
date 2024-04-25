"use strict";
// Abstract class
class Animal2 {
    // Abstract method
    makeSound() {
        throw new Error("Method not implemented.");
    }

    // Regular method
    eat() {
        console.log("Eating");
    }
}

// Concrete class extending abstract class
class Dog1 extends Animal2 {
    makeSound() {
        console.log("Woof");
    }
}

// Creating an instance of Dog
let dog1 = new Dog1();
dog1.makeSound(); // Output: Woof
dog1.eat();       // Output: Eating

/*
   Khi sử dụng abstract method:
   Khi bạn muốn định nghĩa một phương thức mà các lớp con phải cung cấp cài đặt cụ thể.
   Khi muốn tạo một interface cho các lớp con, đồng thời không cung cấp một cài đặt mặc định.

   Khi sử dụng method:
   Khi bạn muốn có một cài đặt mặc định cho phương thức và lớp con có thể override nó nếu cần.
   Khi muốn có một phương thức mà không yêu cầu các lớp con cung cấp một triển khai cụ thể.
 */