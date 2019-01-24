import React from 'react'
import './App.css'
import Search from './Search'
import { Route } from 'react-router-dom'
import MyReads from './MyReads'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <Search />
        )} />

        <Route exact path="/" render={() => (
          <MyReads />)} />
      </div>
    )
  }
}

export default BooksApp
