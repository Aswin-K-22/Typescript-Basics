var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title, author, isAvailable) {
        if (isAvailable === void 0) { isAvailable = true; }
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
    Book.prototype.borrow = function () {
        if (this.isAvailable) {
            this.isAvailable = false;
            return "".concat(this.title, " has been borrowed.");
        }
        else {
            return "".concat(this.title, " is currently not available.");
        }
    };
    Book.prototype.returnBook = function () {
        this.isAvailable = true;
        return "".concat(this.title, " has been returned.");
    };
    return Book;
}());
var Fiction = /** @class */ (function (_super) {
    __extends(Fiction, _super);
    function Fiction(title, author, genre) {
        var _this = _super.call(this, title, author) || this;
        _this.genre = genre;
        return _this;
    }
    Fiction.prototype.getDetails = function () {
        return "Fiction Book: ".concat(this.title, " by ").concat(this.author, ", Genre: ").concat(this.genre);
    };
    return Fiction;
}(Book));
var NonFiction = /** @class */ (function (_super) {
    __extends(NonFiction, _super);
    function NonFiction(title, author, subject) {
        var _this = _super.call(this, title, author) || this;
        _this.subject = subject;
        return _this;
    }
    NonFiction.prototype.getDetails = function () {
        return "Non-Fiction Book: ".concat(this.title, " by ").concat(this.author, ", Subject: ").concat(this.subject);
    };
    return NonFiction;
}(Book));
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    User.prototype.borrowBook = function (book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            return book.borrow();
        }
        else {
            return "".concat(this.name, " cannot borrow ").concat(book.title, " as it's not available.");
        }
    };
    User.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
            return book.returnBook();
        }
        return "".concat(this.name, " hasn't borrowed ").concat(book.title, ".");
    };
    User.prototype.listBorrowedBooks = function () {
        if (this.borrowedBooks.length === 0) {
            return "".concat(this.name, " has no borrowed books.");
        }
        return "".concat(this.name, "'s Borrowed Books:\n").concat(this.borrowedBooks.map(function (book) { return "- ".concat(book.title); }).join('\n'));
    };
    return User;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.listBooks = function () {
        if (this.books.length === 0) {
            return "No books available in the library.";
        }
        return "Library Books:\n".concat(this.books.map(function (book) { return "- ".concat(book.title, " (").concat(book.isAvailable ? "Available" : "Borrowed", ")"); }).join('\n'));
    };
    return Library;
}());
var library = new Library();
var book1 = new Fiction("The Hobbit", "J.R.R. Tolkien", "Fantasy");
var book2 = new NonFiction("Sapiens", "Yuval Noah Harari", "History");
var book3 = new Fiction("1984", "George Orwell", "Dystopian");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
var user = new User("Aswin");
console.log(library.listBooks());
console.log(user.borrowBook(book1));
console.log(user.borrowBook(book2));
console.log(user.listBorrowedBooks());
console.log(library.listBooks());
console.log(user.returnBook(book1));
console.log(library.listBooks());
