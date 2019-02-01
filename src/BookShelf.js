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

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.map((book) => {
                            return (
                                <li key={book.id}>
                                    <Book book={book} handleMove={this.handleMove} />
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
