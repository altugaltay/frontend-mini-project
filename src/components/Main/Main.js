import Product from '../Product/Product';


function Main(props) {
    const {products, onAdd, onRemove, state, cartItems} = props;
  return (
    <div className='block col-2 spectrum-background'>
        <h4>Products</h4>
        {state && <h4>Loading...</h4>}
        {!state && (
        <div className='row'>
        {products.map(product => (<Product item={cartItems.find((x) => x.id ===product.id)}  onAdd={onAdd} onRemove={onRemove} key={product.id} product={product} ></Product>))}
        </div>
    )}
    </div>
  )
}

export default Main