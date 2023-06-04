import React from 'react'

function MeniItem({image,name,price}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p className='sss'>${price}</p>
        <button className='ssss btn btn-primary btn-sm'>Buy Now</button>
        
        
    </div>
  )
}

export default MeniItem