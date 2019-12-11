import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Books from './pages/books'
import Book from './pages/book'
import CreateBook from './pages/createBook'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/book/:id">
          <Book />
        </Route>
        <Route path="/create">
          <CreateBook />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
