import React from 'react'
/**
 * 
 * @param {*} props 
 * @description Showing how many different products have been added to the cart
 */
function Header(props) {
    const { countCartItems } = props;
    return (
        <div className='row center block spectrum-background'>
            <div>
                <a href='#/'><h3>Product Listing and Shoping Cart</h3></a>
            </div>
            <div>
                <a href='#/cart'><h4>Cart</h4>

                </a>
                {countCartItems ? (
                    <div className='badge'>{countCartItems}</div>
                ) : ('')}
            </div>
        </div>
    )
}
export default Header