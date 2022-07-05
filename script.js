const form = document.getElementById('myForm');
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
2.Store new Book object in array
*/

function addBookToLibrary() {
  let title = document.getElementById('title');
  console.log(title.value);
}

//Pop up functionality
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

//Adding books
bookBtn.addEventListener('click', openForm)
form.addEventListener('submit', (e) => {
  addBookToLibrary();
  e.preventDefault();
  }
);
