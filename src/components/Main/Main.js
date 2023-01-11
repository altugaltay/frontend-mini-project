import React, { useEffect, useState} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

function Main() {
const [loading, setLoading] = useState(true);
const [data, setData] = useState([])
useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://dummyjson.com/products');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);
  return (
    <div className='block col-2'>
        <h4>Products</h4>
        {loading && <h4>Loading...</h4>}
        {!loading && (
        <div className='row'>
        {data.products.map(product => (<Product key={product.id} product={product} ></Product>))}
        </div>
    )}
    </div>
  )
}

export default Main