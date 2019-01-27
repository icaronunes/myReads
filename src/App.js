import React from 'react'
import './App.css'
import Search from './Search'
import { Route, Switch } from 'react-router-dom'
import MyReads from './MyReads'

class BooksApp extends React.Component {

  render() {
    return (
      <Switch className="app">
        <Route path="/search" 
        component={Search} />
       

        <Route exact path="/" render={() => (
          <MyReads />)} />
      </Switch>
    )
  }
}

export default BooksApp
