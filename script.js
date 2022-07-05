//Add function that takes user's input and stores the books in an array
const bookBtn = document.querySelector('.add-book')
let myLibrary = [];

function Book() {
    //constructor
}

function addBookToLibrary() {
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function closeButton() {
    document.getElementById("add-book").style.display = "none";
  }

bookBtn.addEventListener('click', openForm)


