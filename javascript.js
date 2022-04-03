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

document.querySelector('.button').addEventListener('click',function () {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector('#pages').value

    string = `<div class="card"><h1>${title}</h1><p>${author}</p><p>${pages}</p></div>`;
    newBook = document.createElement('div');
    newBook.classList = 'card'
    newBook.innerHTML = string;
    document.querySelector('.library').appendChild(newBook)
    document.querySelector(".form").reset()
})
