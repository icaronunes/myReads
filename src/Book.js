import React from 'react'

const Book = (props) => {

    let book = props.book
    console.log(book.shelf)
    return (
        <div className="book">
            <div className="book-authors">{book.authors}</div>
            <div className="book-top">
                <div className="book-cover" style={
                    {
                        width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})`
                    }}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={book.shelf ? book.shelf : '...'} onChange={(e) => {
                        props.handleMove(e, book)
                    }}>
                        <option value="..." disabled >Move to...</option>
                        <option value="wantToRead"
                        >Want to Read</option>
                        <option value="currentlyReading"
                        >Currently Reading</option>
                        <option value="read"
                        >Read</option>
                        <option value="none" hidden={book.shelf}>None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
        </div>
    )
}

export default Book