import React from 'react'
import { Link } from 'react-router-dom'
//Uma class sem estado para criar componente de exibição da capa do livro na estante
const Book = (props) => {

    let book = props.book
    return (
        <div className="book">
            <div className="book-authors">{book.authors}</div>
            <div className="book-top">
                <Link className="book-cover" style={
                    {
                        width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})`
                    }} to={{
                        pathname: `/book/${book.id}`,
                        state: { book }
                    }}></Link>

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