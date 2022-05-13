import React from 'react'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar/Navbar'
import './App.css'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'></Route>
        </Routes>

      </Router>
    </>
  )
}

export default App