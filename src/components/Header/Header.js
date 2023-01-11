import React from 'react'

function Header() {
  return (
    <div className='row center block'>
        <div>
            <a href='#/'><h3>Product Listing and Shoping Cart</h3></a>
        </div>
        <div>
            <a href='#/cart'>Cart</a>
        </div>
    </div>
  )
}

export default Header