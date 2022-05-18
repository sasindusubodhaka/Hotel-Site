import React ,{useEffect} from 'react'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar/Navbar'
import './App.css'
import Home from './components/pages/Home'
import About from './components/About/About'



const App=() =>{
  useEffect(() => {
    console.log("App")
}, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path ='/' exact element={<Home />}></Route>      
          <Route path ='/about' exact element={<About />}></Route>  
        </Routes>

      </Router>
    </>
  )
}

export default App