import React, { Component } from 'react'

export default class BookShelf extends Component {
    // TDOO Usar PropsType
    handleMove = (e, book) => {
        console.log('entrou')
        const type = e.target.value
        book.shelf = type
        this.props.handle(book, type)
    }

    render() {
        const books = this.props.book
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.map((book) => {
                            return (
                                <li key={book.title}>
                                    <div className="book">
                                        <div className="book-authors">{book.authors}</div>
                                        <div className="book-top">
                                            <div className="book-cover" style={
                                                {
                                                    width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                                }}></div>
                                            <div className="book-shelf-changer">
                                                <select onChange={(e) => { this.handleMove(e, book) }}>
                                                    <option key={book.title} value="move" disabled>Move to...</option>
                                                    <option value="wantToRead" hidden={this.props.type === 'wantToRead'}
                                                    >Want to Read</option>
                                                    <option value="currentlyReading" hidden={this.props.type === 'currentlyReading'}
                                                    >Currently Reading</option>
                                                    <option value="read" hidden={this.props.type === 'read'}
                                                    >Read</option>
                                                    <option value="none" hidden={this.props.type === 'none'}>None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
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
