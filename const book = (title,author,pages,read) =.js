const book = (title,author,pages,read) => {
    const getTitle = () => title;
    const getAuthor = () => author;
    const getPages = () => pages;
    let readStatus = read;
    const changeReadStatus = () => {
        if (this.readStatus == 'false') {
            this.readStatus = 'true' 
        } else {
            this.readStatus = 'false'
        } 
    }
    return {getTitle,getAuthor,getPages,readStatus,changeReadStatus}
}

