import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
        <div className='headerContainer' >
            <div className='passage'>
                <h1>Pedro's Pizzeria</h1><br></br>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to='/Menu'>
                    <button>ORDER NOW</button>
                </Link>
                
            </div>

        </div>
    </div>
  )
}

export default Home