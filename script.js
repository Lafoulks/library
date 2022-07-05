const form = document.getElementById('myForm');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let status = document.getElementById('status');
const bookBtn = document.querySelector('.add-book');
let myLibrary = [];

function Book(author, title, pages, status) {
    this.author = author
    this.title = title
    this.pages = pages
    this.status = status
}

/*Add function that:
1. Takes user input
2. Creates new book
3. Pushes book to myLibrary array
*/
function addBookToLibrary(newBook) {
  newBook = new Book(author.value, title.value, pages.value);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

//Pop up functionality
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

//Adding books
bookBtn.addEventListener('click', openForm)
form.addEventListener('submit', (e) => {
  addBookToLibrary(author, title, pages);
  e.preventDefault();
  }
);
