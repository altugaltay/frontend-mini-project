import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Basket from "./components/Basket/Basket";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
let [cartItems,setCartItems] = useState([]);
const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);
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

  const {products} = data;
  /**
   * 
   * @param {*} product 
   * @description method to handle item addition
   * 
   */
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      const newCartItems = cartItems.map((x) => 
      x.id === product.id ? {...exist, quantity: exist.quantity +1} : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems',JSON.stringify(newCartItems));
    }
    else{
      const newCartItems = [...cartItems,{...product, quantity: 1}];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems',JSON.stringify(newCartItems));
    }
  };
  /**
   * 
   * @param {*} product 
   * @description method to handle item remove
   */
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.quantity === 1){
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems',JSON.stringify(newCartItems));
    }
    else{
      const newCartItems = cartItems.map((x) => 
      x.id === product.id ? {...exist, quantity: exist.quantity - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems',JSON.stringify(newCartItems));
    }
  };
  /**
   * @description method to handle clear cart
   */
  const clearCart = () =>{
    cartItems = [];
    setCartItems(cartItems);
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
  };
  useEffect(()=>{
    setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]);
  },[])
  return (
    <div>
      <Header countCartItems = {cartItems.length}/>
      <div className="row">
        <Main cartItems ={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} state={loading}/>
        <Basket cartItems ={cartItems} onAdd={onAdd} onRemove={onRemove} clearCart={clearCart}/>
      </div>
    </div>
  );
}

export default App;
