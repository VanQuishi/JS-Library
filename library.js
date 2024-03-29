const bookShelf = document.getElementById('bookShelf');
let myLibrary = [];

function Book(title, author, pages, addedDate, isRead, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.addedDate = addedDate;
  this.isRead = isRead;
  this.index = index;
} 

function addBookToLibrary(title, author, pages, addedDate, isRead) {
  var index = myLibrary.length;
  var book = new Book(title, author, pages, addedDate, isRead, index);
  myLibrary.push(book);

  displayBook(book);
  populateStorage();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  populateStorage();
  window.location.reload(true);
}

function displayBook(book) {
  var bookItem = document.createElement('div');
  bookItem.classList.add('bookItem');

  var bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');

  var author = document.createElement('div');
  author.innerHTML = "Author: " + book.author;

  var pages = document.createElement('div');
  pages.innerHTML = "Pages: " + book.pages;

  var addedDate = document.createElement('div');
  addedDate.innerHTML = "Added Date: " + book.addedDate;

  var isRead = document.createElement('div');

  isRead.innerHTML = (book.isRead) ? "Completed!" : "In Progress...";
  
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(addedDate);
  bookCard.appendChild(isRead);

  var bookTitle = document.createElement('div');
  bookTitle.innerHTML = book.title;

  var removeBtn = document.createElement('button');
  removeBtn.innerHTML = "Remove";
  removeBtn.classList.add('removeBtn');
  removeBtn.setAttribute('data-index', book.index);
  removeBtn.setAttribute('onclick', 'removeBook(this.dataset.index);');

  bookItem.appendChild(bookCard);
  bookItem.appendChild(bookTitle);
  bookItem.appendChild(removeBtn);
  bookShelf.appendChild(bookItem);
}

function getInfoFromBookForm() {
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var pages = document.getElementById('pages').value;
  var addedDate = document.getElementById('addedDate').value;
  var isRead = (document.getElementById('yesOption').checked) ? true : false;

  addBookToLibrary(title, author, pages, addedDate, isRead);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('addedDate').value = '';
  document.getElementById('yesOption').checked = false;
  document.getElementById('noOption').checked = false;
  document.getElementById('formContainer').style.display = "none";
}

function openForm() {
  document.getElementById('formContainer').style.display = "";
}

function closeForm() {
  document.getElementById('formContainer').style.display = "none";
}

function populateStorage() {
  localStorage.setItem('myLocalLibrary', JSON.stringify(myLibrary));
}

function displayLibrary() {
  var existingLib = JSON.parse(localStorage.getItem("myLocalLibrary"));
  console.log("existingLib", existingLib);

  myLibrary = [];
  existingLib.forEach(function(item) { 
    addBookToLibrary(item['title'], item['author'], item['pages'], item['addedDate'], item['isRead']);
  });
}

//Check if a localStorage item myLibrary exists
if(!localStorage.getItem('myLocalLibrary')) {
  populateStorage();
  // displayLibrary();
} else {
  displayLibrary();
}

//localStorage.setItem('myLocalLibrary', JSON.stringify([]));

//hardcoded books for testing
// const b1 = new Book('Harry Porter', 'J.K. Rowling', 4167, '2021-10-24', true);
// const b2 = new Book('Olympus Heroes', 'Rick Riordan', 3088, '2021-10-25', false);
// const b3 = new Book('How to Swing Trade', 'Brian Pezim' , 322, '2021-10-26', true);

// myLibrary = [b1, b2, b3];
// console.log(myLibrary);

// displayBook(b1);
// displayBook(b2);
// displayBook(b3);
