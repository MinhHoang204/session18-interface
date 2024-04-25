"use strict";
class LendedBook1 {
    constructor(id) {
        this.id = id;
    }
}

class Book2 {
    constructor(id, title, stock, status) {
        this.id = id;
        this.title = title;
        this.stock = stock;
        this.status = status;
    }
}

class Member1 {
    constructor() {
        this.books = [];
    }

    borrowBook(bookId, libraryBooks) {
        const bookIndex = libraryBooks.findIndex(book => book.id === bookId);
        if (bookIndex === -1) {
            console.log("Không tìm thấy sách này trong thư viện.");
            return;
        }

        const book = libraryBooks[bookIndex];
        if (book.stock === 0 || book.status === "unavailable") {
            console.log("Sách không có sẵn để mượn.");
            return;
        }

        if (this.books.some(borrowedBook => borrowedBook.id === bookId)) {
            console.log("Bạn đã mượn sách này. Vui lòng trả sách trước khi mượn tiếp.");
            return;
        }

        book.stock--;
        this.books.push(new LendedBook1(bookId));
        console.log("Đã mượn sách thành công.");
    }

    returnBook(bookId, libraryBooks) {
        const bookIndex = this.books.findIndex(book => book.id === bookId);
        if (bookIndex === -1) {
            console.log("Bạn chưa mượn sách này.");
            return;
        }

        const book = libraryBooks.find(b => b.id === bookId);
        if (book) {
            book.stock++;
        }

        this.books.splice(bookIndex, 1);
        console.log("Đã trả sách thành công.");
    }
}

// Sử dụng
const libraryBooks = [
    new Book2(1, "Harry Potter", 3, "available"),
    new Book2(2, "Lord of the Rings", 0, "unavailable"),
    new Book2(3, "The Hobbit", 5, "available"),
];

const member = new Member1();
member.borrowBook(1, libraryBooks);
member.borrowBook(2, libraryBooks);
member.borrowBook(1, libraryBooks);
member.returnBook(1, libraryBooks);