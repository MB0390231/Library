const Collection = {
    books: [{title:"Marvel Schematics",author:'Stan Lee',pages:769,read:false,rendered:false}],
    book: (title,author,pages,read,rendered) => {
        return {title,author,pages,read,rendered}
    },    
    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.renderBooks();
    },
    cacheDom: function () {
        this.library = document.querySelector('.library');
        this.form = document.querySelector('form');
        this.add = document.querySelector('.addBook');
        this.submit = document.querySelector('.submit');
        this.read = document.querySelectorAll('#read')
        this.title = this.form.children[1].value;
        this.author = this.form.children[3].value;
        this.pages = this.form.children[5].value;
    },
    bindEvents: function () {
        this.add.addEventListener('click',this.showForm.bind(this));
        this.submit.addEventListener('click',this.logBook.bind(this));
    },
    showForm: function () {
        this.add.classList.toggle('active')
        this.form.classList.toggle('hidden')
    },
    logBook: function () {
        title = this.form.children[1].value;
        author = this.form.children[3].value;
        pages = this.form.children[5].value;
        const content = this.book(title,author,pages,false,false);
        this.books.push(content)
        this.renderBooks()
    },
    renderBooks: function () {
        this.books.forEach(book => {
            if (!book.rendered) {
                string = `<button type="button" class="notread" id="read">Read</button><p class='bold'>${book.title}</p><p>${book.author}</p><p>${book.pages}</p>`;
                let child = document.createElement('div');
                child.classList = 'card';
                child.innerHTML = string;
                this.library.appendChild(child)
                book.rendered = true;
            }
        })
    },
}

Collection.init()
