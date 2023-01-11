import React from 'react'

function Product(props) {   
const {product, onAdd, onRemove} = props;
  return (
    <div className='card'>
        <img className='small' src={product.thumbnail} alt={product.title}></img>
        <h5>{product.title}</h5>
        <div>${product.price}</div>
        <button onClick={()=> onAdd(product)}>Add To Cart</button>
    </div>
  )
}

export default Product