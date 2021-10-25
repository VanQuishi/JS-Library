let myLibrary = [];

function Book(name, author, pages, addedDate, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.addedDate = addedDate;
  this.isRead = isRead;
} 

function addBookToLibrary(name, author, pages, addedDate, isRead) {
  var book = new Book(name, author, pages, addedDate, isRead);
  myLibrary.push(book);
}

//hardcoded books for testing
const b1 = new Book('Harry Porter', 'J.K. Rowling', 4167, '2021-10-24', true);
const b2 = new Book('Olympus Heroes', 'Rick Riordan', 3088, '2021-10-25', false);
const b3 = new Book('How to Swing Trade', 'Brian Pezim' , 322, '2021-10-26', true);

myLibrary = [b1, b2, b3];
