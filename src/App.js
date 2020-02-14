import React from 'react'
import HomePage from './Pages/HomePage'
import { Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Route exact path = '/' render={() => <HomePage /> } />
    </div>
  );
}

export default App;