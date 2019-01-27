import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search, update } from './BooksAPI'
import Bookshelf from './BookShelf'
import { debounce } from 'lodash'

export default class Search extends Component {

    state = {
        list: [],
    }

    handleSearch = debounce((query) => {
        console.log(query)
        if (!query) { this.setState({ list: [] }) }

        search(query)
            .then(resolver => {
                console.log('resolver', resolver)
                if (!resolver.error) {
                    this.setState({
                        list: resolver
                    })
                } else {
                    this.setState({ list: [] })
                }

            }).catch(erro => {
                console.log('erro', erro)
                this.setState({ list: [] })
            })
    }, 500)
    /** Loadsh para aguardar 500 milisegundos, para nova busca */

    handleMoveBook = (book, shelf) => {
        update(book, shelf).then(resolver => {
            console.log(resolver)
        }).catch(erro => {
            console.log(erro)
        })
    }

    render() {


        let books = this.props.location.state.books
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {
                            /*
                              NOTES: The search from BooksAPI is limited to a particular set of search terms.
                              You can find these search terms here:
                              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                
                              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                              you don't find a specific author or title. Every search is limited by search terms.
                            */
                        }
                        <input type="text" placeholder="Search by title or author" onChange={ (e) => this.handleSearch(e.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.list &&
                            <Bookshelf title={'Search'} type={'currentlyReading'}
                                book={this.state.list}
                                listUser={books}
                                handle={this.handleMoveBook}
                            />
                        }
                    </ol>
                </div>
            </div>
        )
    }
}
