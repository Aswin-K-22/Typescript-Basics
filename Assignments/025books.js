var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true,
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false,
    },
];
// Function to display the book status
function displayBookStatus(books) {
    books.forEach(function (book) {
        if (book.readingStatus) {
            console.log("Already read '".concat(book.title, "' by ").concat(book.author, "."));
        }
        else {
            console.log("You still need to read '".concat(book.title, "' by ").concat(book.author, "."));
        }
    });
}
// Call the function to display status
displayBookStatus(library);
