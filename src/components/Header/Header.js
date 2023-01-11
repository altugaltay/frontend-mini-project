import React from 'react'

function Header(props) {
    const {countCartItems} = props;
  return (
    <div className='row center block'>
        <div>
            <a href='#/'><h3>Product Listing and Shoping Cart</h3></a>
        </div>
        <div>
            <a href='#/cart'><h4>Cart</h4>

            </a>
            {countCartItems ? (
                <div className='badge'>{countCartItems}</div>
            ):('')}
        </div>
    </div>
  )
}

export default Header