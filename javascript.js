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
  books: [Book("Marvel Schematics", "Stan Lee", 769, false)],
  book: (title, author, pages, read, rendered) => {
    return { title, author, pages, read, rendered };
  },
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
    let cancel = document.createElement("button");
    cancel.textContent = "cancel";
    this.cancel = cancel;
    setAttributes(cancel, { class: "cancel", type: "button" });
    let submit = document.createElement("button");
    submit.textContent = "add book";
    setAttributes(submit, { class: "submit", type: "button" });
    subcan.appendChild(cancel);
    subcan.appendChild(submit);
    form.append(subcan);
    this.main.appendChild(form);

    this.form = form;
    // add button functionality
    this.cancel.addEventListener("click", this.deleteForm.bind(this));
    this.submit.addEventListener("click", this.logBook().bind(this));
    this.submit.addEventListener("click", this.deleteForm().bind(this));
  },
  logBook: function () {},
  deleteForm: function () {
    this.form.remove();
  },
  renderBooks: function () {
    this.books.forEach((book) => {
      // if (!book.rendered) {
      //     string = `<button type="button" class="notread" id="read">Read</button><p class='bold'>${book.title}</p><p>${book.author}</p><p>${book.pages}</p>`;
      //     let child = document.createElement('div');
      //     child.classList = 'card';
      //     child.innerHTML = string;
      //     this.library.appendChild(child)
      //     book.rendered = true;
      // }
    });
  },
};

Collection.init();
