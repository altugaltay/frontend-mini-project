import React from 'react'
/**
 * 
 * @param {*} props 
 * @description The data from the main component is placed inside the cards.
 */
function Product(props) {   
const {product, onAdd, onRemove, item} = props;
  return (
    <div className='card spectrum-background-card'>
        <img className='small' src={product.thumbnail} alt={product.title}></img>
        <p className='bold'>{product.title}</p>
        <p>${product.price}</p>
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