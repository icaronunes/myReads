import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

class BookShelf extends Component {

    handleMove = (e, book) => {
        const type = e.target.value
        book.shelf = type
        this.props.handle(book, type)
    }

    render() {
        let books = this.props.book
        const booksUser = this.props.listUser

        if (booksUser)
            books = books.map((item, i) => {
                booksUser.forEach(element => {
                    if (item.id === element.id) {
                        item.shelf = element.shelf
                    }
                });
                return item
            })
       // console.log(books)

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.map((book) => {
                            return (
                                <li key={book.id}>

                                <Book book={book} handleMove={this.handleMove} />


                                    {/**<div className="book">
                                        <div className="book-authors">{book.authors}</div>
                                        <div className="book-top">
                                            <div className="book-cover" style={
                                                {
                                                    width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})`
                                                }}></div>
                                            <div className="book-shelf-changer">
                                                <select defaultValue={book.shelf ? book.shelf : '...'} onChange={(e) => {
                                                    this.handleMove(e, book)
                                                }}>
                                                    <option value="..." disabled >Move to...</option>
                                                    <option value="wantToRead"
                                                    >Want to Read</option>
                                                    <option value="currentlyReading"
                                                    >Currently Reading</option>
                                                    <option value="read"
                                                    >Read</option>
                                                    <option value="none" >None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                            </div> */}
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    book: PropTypes.array.isRequired,
    handle: PropTypes.func,
    listUser: PropTypes.array
};

export default BookShelf
