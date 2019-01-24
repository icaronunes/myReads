import React, { Component } from 'react'

export default class BookSheft extends Component {

    render() {
        const book = this.props.book
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {book && book.map((book) => {
                            return (
                                <li key={book.title}>
                                    <div className="book">
                                        <div className="book-top">                                          
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}
