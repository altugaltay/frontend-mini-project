import Product from '../Product/Product';
import { useState } from 'react';
/**
 * 
 * @param {*} props 
 * @description Filtering processes of the products and sending the data to the product component are provided.
 */
function Main(props) {
    const {products, onAdd, onRemove, state, cartItems} = props;
    const[query, setQuery] = useState("");
  return (
    <div className='block col-2 spectrum-background'>
        <h3>Products</h3>
        <input className='search' type={'text'} placeholder={'Search...'} onChange ={(e) => setQuery(e.target.value)}></input>
        {state && <h4>Loading...</h4>}
        {!state && (
        <div className='row'>
        {products.filter(product=>product.title.toLowerCase().includes(query)).map(product => (<Product item={cartItems.find((x) => x.id ===product.id)}  onAdd={onAdd} onRemove={onRemove} key={product.id} product={product} ></Product>))}
        </div>
    )}
    </div>
  )
}
export default Main