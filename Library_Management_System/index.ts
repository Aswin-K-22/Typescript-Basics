class Book {
    constructor(public title: string, public author: string, public isAvailable: boolean = true) {}

    borrow(): string {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `${this.title} has been borrowed.`;
        } else {
            return `${this.title} is currently not available.`;
        }
    }

    returnBook(): string {
        this.isAvailable = true;
        return `${this.title} has been returned.`;
    }
}

class Fiction extends Book {
    constructor(title: string, author: string, public genre: string) {
        super(title, author);
    }

    getDetails(): string {
        return `Fiction Book: ${this.title} by ${this.author}, Genre: ${this.genre}`;
    }
}

class NonFiction extends Book {
    constructor(title: string, author: string, public subject: string) {
        super(title, author);
    }

    getDetails(): string {
        return `Non-Fiction Book: ${this.title} by ${this.author}, Subject: ${this.subject}`;
    }
}

class User {
    private borrowedBooks: Book[] = [];

    constructor(public name: string) {}

    borrowBook(book: Book): string {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            return book.borrow();
        } else {
            return `${this.name} cannot borrow ${book.title} as it's not available.`;
        }
    }

    returnBook(book: Book): string {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
            return book.returnBook();
        }
        return `${this.name} hasn't borrowed ${book.title}.`;
    }

    listBorrowedBooks(): string {
        if (this.borrowedBooks.length === 0) {
            return `${this.name} has no borrowed books.`;
        }
        return `${this.name}'s Borrowed Books:\n${this.borrowedBooks.map(book => `- ${book.title}`).join('\n')}`;
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    listBooks(): string {
        if (this.books.length === 0) {
            return "No books available in the library.";
        }
        return `Library Books:\n${this.books.map(book => `- ${book.title} (${book.isAvailable ? "Available" : "Borrowed"})`).join('\n')}`;
    }
}

const library = new Library();

const book1 = new Fiction("The Hobbit", "J.R.R. Tolkien", "Fantasy");
const book2 = new NonFiction("Sapiens", "Yuval Noah Harari", "History");
const book3 = new Fiction("1984", "George Orwell", "Dystopian");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const user = new User("Aswin");

console.log(library.listBooks());
console.log(user.borrowBook(book1));
console.log(user.borrowBook(book2));
console.log(user.listBorrowedBooks());
console.log(library.listBooks());
console.log(user.returnBook(book1));
console.log(library.listBooks());
