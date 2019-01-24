import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Toolbar from './Toolbar'
import Bookshelf from './BookSheft'
import { getAll } from './BooksAPI'

export default class MyReads extends Component {

    state = {
        list: [],
        current: [],
        read: [],
        want: []
    }

    componentDidMount() {
        getAll().then(resolver => {
            let read = []
            let current = []
            let want = []

            resolver.map(book => {
                if (book.shelf === 'currentlyReading') {
                    current = [...current, book]
                }
                if (book.shelf === 'wantToRead') {
                    want = [...want, book]
                }
                if (book.shelf === 'read') {
                    read = [...read, book]
                }
            })

            this.setState({
                current,
                read,
                want
            })
        })
    }

    render() {
        return (
            <div>
                <div className="list-books">
                    <Toolbar />
                    <div className="list-books-content">
                        <div>
                            <Bookshelf title={'Currently Reading'} book={this.state.current} />
                            <Bookshelf title={'Want to Read'} book={this.state.want} />
                            <Bookshelf title={'Read'} book={this.state.read} />
                        </div>
                    </div>
                    <Link className="open-search" to="/search">Link</Link>
                </div>
            </div>
        )
    }
}
