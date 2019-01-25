import React, { Component } from 'react'

export default class BookSheft extends Component {

    handleMove = (e, book) => {
        const type = e.target.value
        book.sheft = type        
        this.props.handle(book, type)        
    }

    render() {
        const book = this.props.book
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {book && book.map((book) => {
                            return (
                                <li key={book.title}>
                                    <div className="book">
                                        <div className="book-authors">{book.authors}</div>
                                        <div className="book-top">
                                            <div className="book-cover" style={
                                                { width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` 
                                            }}></div>
                                            <div className="book-shelf-changer">
                                                <select onChange={(e) => { this.handleMove(e, book)}}>
                                                    {/** option ativado apenas para outra categoria  */}
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="currentlyReading" hidden={this.props.type === 'currentlyReading'}>Currently Reading</option>
                                                    <option value="wantToRead" hidden={this.props.type === 'wantToRead'}>Want to Read</option>
                                                    <option value="read" hidden={this.props.type === 'read'} disabled={this.props.type === 'read'}>Read</option>
                                                    <option value="none" >None</option>
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
