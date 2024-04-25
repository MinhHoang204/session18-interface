"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = [];
        this.status = status;
    }
}

class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    showBooks() {
        console.log("Books in the library:");
        this.books.forEach((book) => {
            console.log(`- ${book.title} by ${book.author}`);
        });
    }
}

// Tạo thực thể của lớp Library
const library = new Library();
// Thêm sách vào thư viện
const book1 = new Book(1, "Harry Potter", "J.K. Rowling", 10, "Available");
const book2 = new Book(2, "Lord of the Rings", "J.R.R. Tolkien", 5, "Available");
library.addBook(book1);
library.addBook(book2);
// Hiển thị tất cả sách trong thư viện
library.showBooks();