import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Toolbar from './Toolbar'
import Bookshelf from './BookShelf'
import { getAll } from './BooksAPI'

export default class MyReads extends Component {

    state = {
        book: [],
        erro: ''
    }

    handleMoveBook = (book, type) => {
        let old = this.state.book
        let novaLista = old.map((item, i, array) => {
            if (item.title === book.title) {
                item = book
            }
            return item
        })

        this.setState({
            book: novaLista,
        })
    }

    componentDidMount() {
        getAll().then(resolver => {
            this.setState({
                book: resolver
            })
        }).catch(reject => {
            this.setState({
                erro: "Erro na obtenção da lista de livros"
            })
        })
    }

    render() {

        let current = [], read = [], want = [], none = [];
        this.state.book.forEach(item => {
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
                {!this.state.erro && <div style={{textAlign: "center",}}>ERRO: {this.state.erro}</div>}
                <div className="list-books">
                    <Toolbar />
                    <div className="list-books-content">
                        <div>
                            <Bookshelf title={'Currently Reading'} type={'currentlyReading'} book={current} handle={this.handleMoveBook} />
                            <Bookshelf title={'Want to Read'} type={'wantToRead'} book={want} handle={this.handleMoveBook} />
                            <Bookshelf title={'Read'} type={'read'} book={read} handle={this.handleMoveBook} />
                            <Bookshelf title={'None'} type={'none'} book={none} handle={this.handleMoveBook} />
                        </div>
                    </div>
                    <Link className="open-search" to="/search">Link</Link>
                </div>
            </div>
        )
    }
}
