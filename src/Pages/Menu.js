import React from 'react'
import {MenuList} from '../Pages/MenuList'
import MeniItem from './MeniItem';
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {
                MenuList.map((menuItem,key)=>{
                    return(
                        <div key={key}>
                            <MeniItem image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
                        </div>
                    );

                })
            }
        </div>
    </div>
  )
}


export default Menu