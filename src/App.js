import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Basket from "./components/Basket/Basket";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
const [cartItems,setCartItems] = useState([]);
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
  const onAdd = (product) => {
    console.log("onAdd");
  };
  const onRemove = (product) => {};

  return (
    <div>
      <Header/>
      <div className="row">
        <Main onAdd={onAdd} onRemove={onRemove} products={products} state={loading}/>
        <Basket/>
      </div>
    </div>
  );
}

export default App;
