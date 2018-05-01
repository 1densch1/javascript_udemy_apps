// Book Constructor
function Book(title,author,isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// Store Constructor
function Store(){}

Store.prototype.getBooks = function(){
  let books;
  if(localStorage.getItem('books') === null){
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
}

Store.prototype.displayBooks = function(){
  const books = store.getBooks();

  books.forEach(function(book) {
    const ui = new UI;
    // Add book to UI
    ui.addBookToList(book);
  });
}

Store.prototype.addBook = function(book){
  const books = store.getBooks();
  books.push(book);

  localStorage.setItem('books',JSON.stringify(books));
}

Store.prototype.removeBook = function(isbn){
  const books = store.getBooks();
  books.forEach(function(book, index) {
    if (book.isbn === isbn) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem('books',JSON.stringify(books));
}

// UI Constructor
function UI(){}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  //Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);

}

// Show Alert
UI.prototype.showAlert = function(message, className){
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  //Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div,form);
  // Timeout
  setTimeout(
    function() {
      document.querySelector('.alert').remove();
    }, 3000
  );
}

// Delete book selection
UI.prototype.deleteBook = function(target){
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Init Store
let store = new Store();

// Eventlistener DOM load event
document.addEventListener('DOMContentLoaded',store.displayBooks());

// Eventlistener for add book
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  
  const book = new Book(title,author,isbn);

  // Instantiate UI
  const ui = new UI();

  // Validation
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    //Add book to list
    ui.addBookToList(book);
    // Add to LS
    store.addBook(book);

    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }


  e.preventDefault();
});

// Eventlistener for delete
document.getElementById('book-list').addEventListener('click',function(e) {
  // Instantiate UI
  const ui = new UI();
  ui.deleteBook(e.target);

  // Remove from LS
  store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show alert
  ui.showAlert('Book Removed', 'success');
  
  e.preventDefault();
});