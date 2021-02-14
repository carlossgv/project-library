class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  printInfo(read) {
    if (this.read === true) {
      read = 'read';
    } else {
      read = 'not read';
    }
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${read}`);
  }

  readUpdate(read) {
    if (this.read === true) {
      this.read = false;
    } else {
      this.read = true;
    }
  }
}


let mando = new Book('Mandalorian', 'George Lucas', 200, true);
let witcher = new Book('The Witcher', 'Zapowsky', 500, false);
let toy_story = new Book('Toy Story', 'Pixar', 100, false);
let cyberpunk = new Book('Cyberpunk', 'CD ProjektRed', 200, true);

const myLibrary = [mando, witcher, toy_story, cyberpunk];

const openFormButton = document.querySelector('.open-form');
const form = document.querySelector('form');


document.addEventListener('DOMContentLoaded', () => {
  openFormButton.addEventListener('click', () => toggleDiv(form));
  form.style.display = 'none';
  form.addEventListener('submit', (e) => addNewBook(e));

  populateList();

  addRemoveFunction();

  console.log('DOM Loaded!');
});

function addRemoveFunction() {
    const buttons = document.querySelectorAll('.removeButton');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (e) => removeBook(e))
    }
}

function removeBook(book) {
    book = book.target.id.split("_")[1]
    document.querySelector(`.row_${book}`).remove()
}

function populateList() {
  myLibrary.forEach(function (book) {
    addRow(book);
  });
}

function addNewBook(e) {
  let title = document.querySelector('input[name="title"]').value;
  let author = document.querySelector('input[name="author"]').value;
  let pages = document.querySelector('input[name="pages"]').value;
  let read = document.querySelector('input[name="read"]').checked;

  let book = new Book(title, author, pages, read);

  myLibrary.push(book);

  addRow(book);

  e.preventDefault();
  form.style.display = 'none';
  form.reset();
}

function addRow(book) {
  let table = document.querySelector('tbody');
  let row = document.createElement('tr');
  row.className = `row_${book.title.replace(/\s+/g, '-').toLowerCase()}`
  let checkbox;
  let remove_button = document.createElement('button');
  remove_button.className = 'btn btn-danger removeButton';
  remove_button.id = `remove_${book.title.replace(/\s+/g, '-').toLowerCase()}`

  remove_button.innerHTML = 'X';

  for (att in book) {
    let data_node = document.createElement('td');
    if (typeof book[att] === 'function') {
      continue;
    } else if (typeof book[att] === 'boolean') {
      checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'table-checkbox';

      if (book[att] === true) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }

      data_node.appendChild(checkbox);
    } else {
      data_node.innerHTML = book[att];
    }

    row.appendChild(data_node);
  }

  row.appendChild(remove_button);

  table.appendChild(row);
}


// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// Book.prototype.printInfo = function () {
//   let read;
//   if (this.read === true) {
//     read = 'read';
//   } else {
//     read = 'not read';
//   }
//   console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${read}`);
// };

// Book.prototype.readUpdate = function () {
//   if (this.read === true) {
//     this.read = false;
//   } else {
//     this.read = true;
//   }
// };

function toggleDiv(div) {
  if (div.style.display === 'none') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}
