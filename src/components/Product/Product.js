import React from 'react'

function Product(props) {   
const {product, onAdd, onRemove, item} = props;
  return (
    <div className='card spectrum-background-card'>
        <img className='small' src={product.thumbnail} alt={product.title}></img>
        <h5>{product.title}</h5>
        <div>${product.price}</div>
        <div className='cardFooter'>
            {item ? (
                <div >
                    <button onClick={()=>onRemove(item)} className='remove'>-</button>
                    <span className='p-1'>{item.quantity}</span>
                    <button onClick={()=>onAdd(item)} className='add'>+</button>
                </div>
            ): <button onClick={()=> onAdd(product)}>Add To Cart</button>}
        </div>
    </div>
  )
}

export default Product