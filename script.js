const form = document.getElementById('myForm');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let status = document.getElementById('status');
const bookBtn = document.querySelector('.add-book');
let myLibrary = [];

function Book(author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
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

/*Write function that: 
1. Loops through array and displays each book on the page
2. Display in table or on individual "cards"
  -write a createElement function and place into Book prototype. Style in css and add classlist to each div
3. Manually add permanent books to array to see how the display looks
*/

function createCard() {
  const card = document.createElement('div');
  card.classList.add('card');

}

function dispalyBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    createBooks();
  }
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
