import React,{useState} from 'react'
import pizzaLogo from './assets/pizzaLogo.png'
import {Link} from 'react-router-dom'
import './styles/Navbar.css'
import { Reorder, UsbTwoTone } from '@mui/icons-material'


function Navbar() {
    const [openLinks,setOpenLinks]=useState(false)

    const toggleNavbar=()=>{
        setOpenLinks(!openLinks)
    }


  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks?'open':'close'}>
            <img src={pizzaLogo}></img>
            <div className='hiddenLinks'>
                <Link to='/'>Home</Link>
                <Link to='/Menu'>Menu</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/Menu'>Menu</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
            <button onCanPlay={toggleNavbar}>
                <Reorder></Reorder>
            </button>
        </div>
    </div>
  )
}

export default Navbar