import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Toolbar from './Toolbar'
import Bookshelf from './BookSheft'
import { getAll } from './BooksAPI'

export default class MyReads extends Component {

    state = {
        none: [],
        current: [],
        read: [],
        want: []
    }

    handleRemove = (book, type) => {

    }

    handleMoveBook = (book, type) => {

        if (book.sheft === 'currentlyReading') {
            
            this.state.current.reduce //TODo Aprender isso!

            let alt = this.state.current.map((c, i, a) => {
                if (c.title === book.title) {
                    a[i].pop()
                }
                return c
            })
            console.log(alt)
            this.setState(({
                current: alt
            }))
        }

        if (book.sheft === 'wantToRead') {
            let alt = this.state.current.map(c => {
                if (c.sheft === book.sheft) {
                    c.sheft = book.sheft
                }
                return c
            })
            console.log(alt)
            this.setState(({
                want: alt
            }))
        }

        if (book.sheft === 'read') {
            let alt = this.state.current.map(c => {
                if (c.sheft === book.sheft) {
                    c.sheft = book.sheft
                }
                return c
            })
            console.log(alt)
            this.setState(({
                read: alt
            }))
        }

        if (book.sheft === 'none') {
            let alt = this.state.current.map(c => {
                if (c.sheft === book.sheft) {
                    c.sheft = book.sheft
                }
                return c
            })
            console.log(alt)
            this.setState(({
                none: alt
            }))
        }

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
                            <Bookshelf title={'Currently Reading'} type={'currentlyReading'} book={this.state.current} handle={this.handleMoveBook} />
                            <Bookshelf title={'Want to Read'} type={'wantToRead'} book={this.state.want} handle={this.handleMoveBook} />
                            <Bookshelf title={'Read'} type={'read'} book={this.state.read} handle={this.handleMoveBook} />
                            <Bookshelf title={'None'} type={'none'} book={this.state.none} handle={this.handleMoveBook} />
                        </div>
                    </div>
                    <Link className="open-search" to="/search">Link</Link>
                </div>
            </div>
        )
    }
}
