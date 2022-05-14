import React ,{useEffect} from 'react'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar/Navbar'
import './App.css'

const Home = React.lazy(()=>import('./components/pages/Home'))


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
        </Routes>

      </Router>
    </>
  )
}

export default App