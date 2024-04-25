"use strict";
/*
  Abstract class và interface đều được sử dụng trong TypeScript để định nghĩa các 
  hợp đồng cho các lớp khác để tuân thủ. Tuy nhiên, chúng có một số điểm khác nhau quan trọng:

  Abstract class (lớp trừu tượng):
    Có thể chứa các phương thức trừu tượng (abstract method), mà các lớp con phải triển khai.
    Có thể chứa các phương thức và thuộc tính có cài đặt cụ thể.
    Không thể khởi tạo một đối tượng từ một abstract class.
  Interface (giao diện):
    Chỉ chứa các khai báo phương thức, không có cài đặt cụ thể.
    Không thể chứa các thuộc tính hoặc biến.
    Các lớp khác nhau có thể triển khai cùng một interface theo cách của riêng chúng.
    Một lớp có thể triển khai nhiều interface. 
 */

// Abstract class
class Animal3 {
    move() {
        console.log("Moving");
    }
}

// Interface
class Cat1 {
    makeSound() {
        console.log("Meow");
    }
}

// Dog class implements Animal abstract class
class dog extends Animal3 {
    makeSound() {
        console.log("Woof");
    }
}

let dog2 = new Dog1();
dog.makeSound(); // Output: Woof
dog.move();      // Output: Moving

let Cat = new Cat1();
Cat1.makeSound(); // Output: Meow