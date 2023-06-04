import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'


function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' exact Component={Home}></Route>
            <Route path='/Menu' exact Component={Menu}></Route>
            <Route path='/About' exact Component={About}></Route>
            <Route path='/Contact' exact Component={Contact}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </React.Fragment>

  )
}

export default App