function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages long, ${
      this.read ? "read" : "is not read"
    }`;
  };
}

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const Collection = {
  books: [new Book("Marvel Schematics", "Stan Lee", 769, true)],
  init: function () {
    this.cacheDom();
    this.bindEvents();
    this.renderBooks();
  },
  cacheDom: function () {
    this.library = document.querySelector(".library");
    this.add = document.querySelector(".addBook");
    this.read = document.querySelectorAll("#read");
    this.main = document.querySelector(".main");
  },
  bindEvents: function () {
    this.add.addEventListener("click", this.createForm.bind(this));
  },
  createForm: function () {
    if (document.querySelector(".form")) {
      return;
    }
    console.log("form created");
    let form = document.createElement("form");
    setAttributes(form, { class: "form" });
    let title = document.createElement("label");
    setAttributes(title, { for: "title" });
    title.textContent = "Title: ";
    form.appendChild(title);
    let title_input = document.createElement("input");
    this.title_input = title_input;
    setAttributes(title_input, { type: "text", name: "title", id: "title" });
    form.append(title_input);
    let author = document.createElement("label");
    setAttributes(author, { for: "author" });
    author.textContent = "Author: ";
    form.appendChild(author);
    let author_input = document.createElement("input");
    this.author_input = author_input;
    setAttributes(author_input, { type: "text", name: "author", id: "author" });
    form.append(author_input);
    let pages = document.createElement("label");
    setAttributes(pages, { for: "pages" });
    pages.textContent = "Pages: ";
    form.appendChild(pages);
    let pages_input = document.createElement("input");
    this.pages_input = pages_input;
    setAttributes(pages_input, { type: "text", name: "pages", id: "pages" });
    form.append(pages_input);
    // div with two buttons in it
    let subcan = document.createElement("div");
    setAttributes(subcan, { class: "subcan" });
    let close = document.createElement("button");
    close.textContent = "close";
    this.close = close;
    setAttributes(close, { class: "close", type: "button" });
    let submit = document.createElement("button");
    this.submit = submit;
    submit.textContent = "add book";
    setAttributes(submit, { class: "submit", type: "button" });
    subcan.appendChild(close);
    subcan.appendChild(submit);
    form.append(subcan);
    this.main.appendChild(form);

    this.form = form;
    // add button functionality
    this.close.addEventListener("click", this.deleteForm.bind(this));
    this.submit.addEventListener("click", this.logBook.bind(this));
    this.submit.addEventListener("click", this.deleteForm.bind(this));
    this.submit.addEventListener("click", this.renderBooks.bind(this));
  },
  logBook: function () {
    console.log("logged book");
    new_book = new Book(
      this.title_input.value,
      this.author_input.value,
      this.pages_input.value,
      false
    );
    this.books.push(new_book);
    this.renderBooks.bind(this);
  },
  deleteForm: function () {
    console.log("form deleted");
    this.form.remove();
  },
  renderBooks: function () {
    console.log("books rendered");
    while (this.library.firstChild) {
      this.library.lastChild.remove();
    }
    let index = 0;
    this.books.forEach((book) => {
      const button_div = document.createElement("div");
      setAttributes(button_div, { class: "button-container" });
      const del = document.createElement("button");
      setAttributes(del, { class: "delete" });
      del.textContent = "X";
      const read = document.createElement("img");
      setAttributes(read, {
        class: "readmarker",
        src: "../img/bookmark-check-outline.png",
        id: index,
      });
      button_div.appendChild(read);
      button_div.appendChild(del);
      del.addEventListener("click", function (e) {
        index = e.target.id;
        target = Collection.books.splice(index);
        Collection.renderBooks();
      });
      read.addEventListener("click", function (e) {
        index = e.target.id;
        target = Collection.books[index];
        target.read = target.read ? false : true;
        Collection.renderBooks();
      });
      const title = document.createElement("p");
      title.textContent = book.title;
      const author = document.createElement("p");
      author.textContent = book.author;
      const pages = document.createElement("p");
      pages.textContent = book.pages;
      book_div = document.createElement("div");
      setAttributes(book_div, {
        class: book.read ? "card" : "nonread card",
      });
      book_div.appendChild(button_div);
      book_div.appendChild(title);
      book_div.appendChild(author);
      book_div.appendChild(pages);
      this.library.appendChild(book_div);
      index++;
    });
  },
};

Collection.init();
