class Book {
    id: number;
    title: string;
    author: string;
    stock: number;
    status: string;

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member {
    id: number;
    name: string;
    contact: string;
    books: Book[];
    status: string;

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = [];
        this.status = status;
    }
}

class LendedBook {
    memberId: number;
    bookId: number;
    dueDate: string;

    constructor(memberId: number, bookId: number, dueDate: string) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book) {
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