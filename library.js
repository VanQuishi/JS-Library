const bookShelf = document.getElementById('bookShelf');
let myLibrary = [];

function Book(title, author, pages, addedDate, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.addedDate = addedDate;
  this.isRead = isRead;
} 

function addBookToLibrary(title, author, pages, addedDate, isRead) {
  var book = new Book(title, author, pages, addedDate, isRead);
  myLibrary.push(book);
  displayBook(book);
}

function displayBook(book) {
  console.log('hi');
  var bookItem = document.createElement('div');
  bookItem.classList.add('bookItem');
  var bookCard = document.createElement('div')
  bookCard.classList.add('bookCard');
  var bookTitle = document.createElement('div');

  bookTitle.innerHTML = book.title;

  bookShelf.appendChild(bookItem);
  bookItem.appendChild(bookCard);
  bookItem.appendChild(bookTitle);
}

//hardcoded books for testing
const b1 = new Book('Harry Porter', 'J.K. Rowling', 4167, '2021-10-24', true);
const b2 = new Book('Olympus Heroes', 'Rick Riordan', 3088, '2021-10-25', false);
const b3 = new Book('How to Swing Trade', 'Brian Pezim' , 322, '2021-10-26', true);

//myLibrary = [b1, b2, b3];

displayBook(b1);
