import React from 'react'

function Header(props) {
    const {countCartItems} = props;
  return (
    <div className='row center block'>
        <div>
            <a href='#/'><h3>Product Listing and Shoping Cart</h3></a>
        </div>
        <div>
            <a href='#/cart'>Cart
            {countCartItems ? (
                <div className='badge'>{countCartItems}</div>
            ):('')}
            </a>
        </div>
    </div>
  )
}

export default Header