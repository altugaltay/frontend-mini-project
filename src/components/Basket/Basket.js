import React from 'react'

function Basket(props) {
  const {cartItems, onAdd, onRemove, clearCart} = props;
  const itemsPrice = cartItems.reduce((a,c) => a + c.quantity * c.price, 0);
  const totalPrice = itemsPrice;
  return (
    <aside className='block col-1 spectrum-background'>
      <h3>Cart Items</h3>
      <div>
        {cartItems.length === 0 && <div><h4>Cart is Empty</h4></div>}
        {cartItems.map((item)=>(
          <div key={item.id} className='row'>
            <div className='col-1'><p>{item.title}</p></div>
            <div className='col-1'>
            <button onClick={()=>onRemove(item)} className='remove'>-</button>
            <button onClick={()=>onAdd(item)} className='add'>+</button>
            </div>
            <div className='col-1 text-right right'>
              <p>{item.quantity} x {item.price}</p>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 &&(
          <>
          <hr/>
          <div className='row'>
            <div className='col-2'><p>Items Price</p></div>
            <div className='col-1 text-right right'><p>${itemsPrice}</p></div>
          </div>
          <hr/>
          <div className='row'>
            <div className='col-2'>
              <p>Total Price</p>
            </div>
            <div className='col-1 text-right right'>
              <p>${totalPrice}</p>
            </div>

          </div>
          <hr/>
            <div className='row'>
              <button onClick={() => alert('Implement Checkout')} className='checkout-color'>Checkout</button>
              <button onClick={()=> clearCart()}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}

export default Basket