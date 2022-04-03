let library = [];
const libraryElement = document.querySelector('library')

document.querySelector(".addBook").addEventListener('click',function () {
    document.querySelector('.form').classList.toggle('hidden');
    document.querySelector(".form").reset()
})

function book (title,author,pages) {
    this.title = title,
    this.author = author,
    this.pages = Number(pages),
    this.read = false
}
book.prototype.addBooktoLibrary = function () {
    library.push(this)
}
book.prototype.createDiv = function () {
    string = `<h1>${this.title}</h1><p>${this.author}</p><p>${this.pages}</p>`;
    newBook = document.createElement('div');
    newBook.classList = 'card'
    newBook.innerHTML = string;
    document.querySelector('.library').appendChild(newBook)
}

document.querySelector('.button').addEventListener('click',function () {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector('#pages').value
    let newAddition = new book(title,author,pages)
    newAddition.addBooktoLibrary()
    newAddition.createDiv()
    document.querySelector(".form").reset()

    // string = `<h1>${title}</h1><p>${author}</p><p>${pages}</p>`;
    // newBook = document.createElement('div');
    // newBook.classList = 'card'
    // newBook.innerHTML = string;
    // document.querySelector('.library').appendChild(newBook)
    // document.querySelector(".form").reset()
})
