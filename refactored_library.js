const bookShelf = document.getElementById('bookShelf');

class Book {
  constructor(title, author, pages, addedDate, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.addedDate = addedDate;
    this.isRead = isRead;
  }

  display = () => {
    var bookItem = document.createElement('div');
    bookItem.classList.add('bookItem');

    var bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');

    var author = document.createElement('div');
    author.innerHTML = "Author: " + this.author;

    var pages = document.createElement('div');
    pages.innerHTML = "Pages: " + this.pages;

    var addedDate = document.createElement('div');
    addedDate.innerHTML = "Added Date: " + this.addedDate;

    var isRead = document.createElement('div');

    isRead.innerHTML = (this.isRead) ? "Completed!" : "In Progress...";
    
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(addedDate);
    bookCard.appendChild(isRead);

    var bookTitle = document.createElement('div');
    bookTitle.innerHTML = this.title;

    var removeBtn = document.createElement('button');
    removeBtn.innerHTML = "Remove";
    removeBtn.classList.add('removeBtn');
    removeBtn.setAttribute('data-index', this.index);
    removeBtn.setAttribute('onclick', 'removeBook(this.dataset.index);');

    bookItem.appendChild(bookCard);
    bookItem.appendChild(bookTitle);
    bookItem.appendChild(removeBtn);
    bookShelf.appendChild(bookItem);
  }
}

class Library {
  constructor() {
    this.library = [];
  }

  display = () => {
    this.library.forEach(function(book) {
      book.display();
    })
  }

  addBook = (book) => {
    book.index = this.library.length;
    this.library.push(book);
    localStorage.setItem('myLocalLibrary', JSON.stringify(this.library));
  }

  removeBook = (index) => {
    this.library.splice(index, 1);
    localStorage.setItem('myLocalLibrary', JSON.stringify(this.library));
    window.location.reload(true);
  }
}

function openForm() {
  document.getElementById('formContainer').style.display = "";
}

function closeForm() {
  document.getElementById('formContainer').style.display = "none";
}

function getInfoFromBookForm() {
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var pages = document.getElementById('pages').value;
  var addedDate = document.getElementById('addedDate').value;
  var isRead = (document.getElementById('yesOption').checked) ? true : false;

  var book = new Book(title, author, pages, addedDate, isRead);
  myLibrary.addBook(book);
  book.display();

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('addedDate').value = '';
  document.getElementById('yesOption').checked = false;
  document.getElementById('noOption').checked = false;
  document.getElementById('formContainer').style.display = "none";
}


// ------------------------------ main program -------------------------------
var myLibrary = new Library();;  // create a Library obj

if (!localStorage.getItem('myLocalLibrary')) {
  // call myLibrary obj getter to retrieve library[] and store it in localStorage
  localStorage.setItem('myLocalLibrary', JSON.stringify(myLibrary.library)); 
} else {
  // get data from localStorage and add them in myLibrary obj
  var existingLib = JSON.parse(localStorage.getItem("myLocalLibrary"));
  console.log("existingLib", existingLib);

  existingLib.forEach(function(item) {
    let book = new Book(item['title'], item['author'], item['pages'], item['addedDate'], item['isRead']);
    myLibrary.addBook(book);
  });
  myLibrary.display();
}

function removeBook(index) {
  console.log({index});
  myLibrary.removeBook(index);
}


//hack to wipe out library for testing
//localStorage.setItem('myLocalLibrary', JSON.stringify([]));