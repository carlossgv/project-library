let myLibrary = ["test1","test2"];

function Book() {

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let listContainer = document.getElementById("libraryList");

function createBookList(booksList) {
    for (let i = 0; i < myLibrary.length; i++) {
        let listDiv = document.createElement("div");
        listContainer.appendChild(listDiv);
        listDiv.classList.add("listDiv");
        listDiv.innerHTML = `${myLibrary[i]}`;
    }
}

let newBookButton = document.getElementById("newBookButton");

newBookButton.addEventListener("click", popForm());

function popForm() {
    let popupForm = document.createElement("div");
    
}