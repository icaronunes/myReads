import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Toolbar from './Toolbar'
import Bookshelf from './BookShelf'
import { getAll, update } from './BooksAPI'

//Clas usada para envolver estantes e link para busca
class MyReads extends Component {

    state = {
        books: [],
        erro: ''
    }

    handleMoveBook = (book) => {
        let old = this.state.books
        let novaLista = old.map((item) => {
            if (item.title === book.title) {
                item = book
            }
            return item
        })

        this.setState({
            books: novaLista,
        })

    }

    handleUpdateBook = (book, shelf) => {
        update(book, shelf).then(resolver => {
            console.log(resolver)
            this.handleMoveBook(book)
        }).catch(erro => {
            console.log(erro)
        })
    }

    componentDidMount() {
        getAll().then(resolver => {
            this.setState({
                books: resolver
            })
        }).catch(reject => {
            this.setState({
                erro: "Erro na obtenção da lista de livros"
            })
        })
    }

    render() {

        let current = [], read = [], want = [], none = [];
        this.state.books.forEach(item => {
            if (item.shelf === 'currentlyReading') {
                current = [...current, item]
            }
            if (item.shelf === 'wantToRead') {
                want = [...want, item]
            }
            if (item.shelf === 'read') {
                read = [...read, item]
            }
            if (item.shelf === 'none') {
                none = [...none, item]
            }
        })

        return (

            <div>
                {this.state.erro && <div style={{ textAlign: "center", }}>ERRO: {this.state.erro}</div>}
                <div className="list-books">
                    <Toolbar />
                    <div className="list-books-content">
                        <div>
                            <Bookshelf title={'Currently Reading'} type={'currentlyReading'} book={current} handle={this.handleUpdateBook} />
                            <Bookshelf title={'Want to Read'} type={'wantToRead'} book={want} handle={this.handleUpdateBook} />
                            <Bookshelf title={'Read'} type={'read'} book={read} handle={this.handleUpdateBook} />
                        </div>
                    </div>
                    <Link
                        className="open-search"
                        to={{
                            pathname: '/search',
                            state: { books: this.state.books }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default MyReads
