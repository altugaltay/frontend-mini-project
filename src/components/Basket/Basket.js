import React, { useState } from 'react'
/**
 * 
 * @param {*} props 
 * @description Listing the products added to the basket, removing them from the basket, cleaning the basket and checkout process are provided.
 */
function Basket(props) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    address: "",
    email: "",
    shipping: "",
  })
  const { cartItems, onAdd, onRemove, clearCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
  const totalPrice = itemsPrice;
  const handleSubmit = event => {
    event.preventDefault();
    console.log({
      formData
    })
    setFormData({
      name: "",
      surname: "",
      address: "",
      email: "",
      shipping: "",
    })
  }
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setFormData({ ...formData, [name]: value })
  }
  const DropdownItems = [
    "Expedited",
    "Overnight",
    "Priority Mail",
    "Flat Rate",
    "Multiple Addresses",
    "Local Delivery or Pickup",
    "International",
    "Freight",
  ]
  return (
    <aside className='block col-1 spectrum-background'>
      <h3>Cart Items</h3>
      <div>
        {cartItems.length === 0 && <div><h4>Cart is Empty</h4></div>}
        {cartItems.map((item) => (
          <div key={item.id} className='row'>
            <div className='col-1'><p>{item.title}</p></div>
            <div className='col-1'>
              <button onClick={() => onRemove(item)} className='remove'>-</button>
              <button onClick={() => onAdd(item)} className='add'>+</button>
            </div>
            <div className='col-1 text-right right'>
              <p>{item.quantity} x {item.price}</p>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className='row'>
              <div className='col-2'><p>Items Price</p></div>
              <div className='col-1 text-right right'><p>${itemsPrice}</p></div>
            </div>
            <hr />
            <div className='row'>
              <div className='col-2'>
                <p>Total Price</p>
              </div>
              <div className='col-1 text-right right'>
                <p>${totalPrice}</p>
              </div>

            </div>
            <hr />
            <div className='row'>

              <button className='clear-color' onClick={() => clearCart()}>Clear Cart</button>
            </div>
            <div className='row'>
              <form onSubmit={handleSubmit}>
                <div className='col-1'>
                  <label>
                    Name:
                    <input className='right input-shape' onChange={(e) => handleChange(e)} value={formData.name} type="text" name="name" />
                  </label>
                </div>
                <div className='col-1'>
                  <label>
                    Surname:
                    <input className='right input-shape' onChange={(e) => handleChange(e)} value={formData.surname} type="text" name="surname" />
                  </label>
                </div>
                <div className='col-1'>
                  <label>
                    Address:
                    <input className='right input-shape' onChange={(e) => handleChange(e)} value={formData.address} type="text" name="address" />
                  </label>
                </div>
                <div className='col-1'>
                  <label>
                    E-mail:
                    <input className='right input-shape' onChange={(e) => handleChange(e)} value={formData.email} type="text" name="email" />
                  </label>
                </div>
                <div className='col-1'>
                  <label>
                    Shipping:
                    <select name='shipping' onChange={(e) => handleChange(e)} value={formData.shipping} className='right'>
                      {DropdownItems.map((item, index) => {
                        return (
                          <option key={index}>{item}</option>
                        )
                      })}
                    </select>
                  </label>
                </div>
                <div className='col-1'>
                  <button type='submit' className='checkout-color'>Checkout</button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
export default Basket