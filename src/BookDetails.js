import React from 'react'
import './App.css'
//Class que tras mais detalhes do livro escolhido.
export default function BookDetails(props) {

    const book = props.location.state.book
    console.log(book)

    return (
        <div style={{ margin: '10px 20px 10px 20px' }}>
            <div style={{ display: 'inline' }}>

                <div style={{
                    paddingTop: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'yellow'
                }}>
                    <figure style={
                        {
                            backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})`
                        }}>
                    </figure>
                    <h2 style={{
                        color: 'black',
                        marginTop: '0px',
                        marginBottom: '0px'
                    }} >{book.title}</h2>
                    <h5 style={{
                        color: 'gray',
                        marginTop: '0px',
                        marginBottom: '4px'
                    }} >{book.subtitle}</h5>
                    {book.authors ? book.authors.map(author => {
                        return <h4 key={author} style={{
                            color: 'gray',
                            marginTop: '0px',
                            marginBottom: '4px'
                        }}>{author}</h4>
                    }) : ''}
                    <h6>{book.pageCount && `Pages ${book.pageCount}`}</h6>
                    <h6>{book.categories && book.categories}</h6>
                    <h6 style={{ marginBottom: '60px' }}>{book.publishedDate && book.publishedDate}</h6>
                    <a style={{
                        color: 'black',
                        fontWeight: 'bold'
                    }} href={book.infoLink}>Mais informações</a>
                </div>
            </div>
            <div style={{
                clear: 'both',
                backgroundColor: 'pink',
                borderRadius: '8px',
            }}>{
                    book.description &&
                    <h5 style={{
                        color: 'black',
                        padding: '8px',
                        paddingBottom: '2px',
                        marginTop: '2px',
                        marginBottom: '2px'
                    }}>{book.description}</h5>
                }
                {book.shelf &&
                    <h6 style={{
                        color: 'red',
                        padding: '8px',
                        paddingTop: '2px',
                        marginTop: '2px',
                        marginBottom: '2px'
                    }} >{book.shelf}</h6>
                }
            </div>
        </div>
    )
}
