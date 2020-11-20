


// HAZ EL FUNCIONAMIENTO DE LOS BOTONES DE LEIDO Y BORRAR!!!




let popupForm2 = document.getElementById("newBookForm");
popupForm2.style.zIndex = "-1";
popupForm2.style.opacity = "0";

// instantiate submit button in form
let addBookButton = document.getElementById("addBookButton");
// temp function to clear the popup window
addBookButton.addEventListener("click", () => {
    popupForm2.style.opacity = "0";
    popupForm2.style.zIndex = "-1";
})


let myLibrary = ["test1", "test2", "test3", "test4"];


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

        let readButton = document.createElement("button");
        listContainer.appendChild(readButton);
        readButton.innerHTML = "Read";

        let deleteButton = document.createElement("button");
        listContainer.appendChild(deleteButton);
        deleteButton.innerHTML = "Delete";


    }
}

// AUTOMATICALLY CREATE LIST
createBookList(myLibrary);

// Instantiate button to add a new book and add click property to popup form
let newBookButton = document.getElementById("newBookButton");
newBookButton.addEventListener("click", () => popForm());

function popForm() {
    popupForm2.style.zIndex = "1";
    popupForm2.style.opacity = "1";
}

// // Define popup form function 
// function popForm() {
//     let popupForm = document.createElement("div");
//     popupForm.classList.add("popupForm");
//     listContainer.prepend(popupForm);
//     // disables the button while the form is open
//     newBookButton.disabled = true;
//     // puts the form in front of the website
//     popupForm.style.zIndex = "1";
//     // grabs all of the forms html from a "hidden" element within the html
//     popupForm.innerHTML = document.getElementById("newBookForm").innerHTML;
// }



