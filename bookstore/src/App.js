import React,{useState,useEffect} from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import {
  BrowserRouter as Router,
  Route, Redirect,Routes
}from "react-router-dom";

//import Homepage from './components/Homepage';
import Home from './components/Home';
import Products from './Products/Product/Products';
import api from './services/api';
import Navbar from './components/Navbar/Navbar';
import AddressForm from './components/CheckoutForm/AddressForm';
import Checkout from './components/CheckoutForm/Checkout';
import Review from './components/CheckoutForm/Review';
import Imageslider from './components/imageslider';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  const [products,setProducts] =  useState([]);
  const [cart, setCart] = useState([]);
  const [addCart, addInCart] = useState([]);
  const fetchProducts = async() => {
   const {data} = await api.getAllBooks();
    setProducts(data.data)
    
  
  }

  const handleRemoveFromCart = async (id) => {
    const response = await api.remove(id);

    //setCart(response.cart);
  };
  const fetchCart = async() =>{
    const {data} = await  api.getAllCart();
    setCart(data.data);
  }

  useEffect(() => {
   fetchProducts();
   fetchCart();
  },[])

  const handleAddToCart = async(data) =>
  {
    addInCart(data)
    api.addtocart(data)
    setCart(addCart)
  }

//console.log(cart)
console.log(products)

  return (
    <div className="App">
    {/* <Navbar/>
      <Products products = {products}/> */}
       <Router>
      <Routes>
      <Route exact path="/" element={ <Products products = {products} num = {cart.length} onAddToCart={handleAddToCart}/>}></Route>
        <Route exact path="/cart" element={<Cart cart = {cart}  handleRemoveFromCart={handleRemoveFromCart}/>}></Route>
        <Route exact path="/checkout" element={<Checkout/>}></Route>
        <Route exact path="/review" element={<Review/>}></Route>
        <Route exact path="/check" element={<Imageslider/>}></Route>
      </Routes>
      </Router>
  
    </div>
  );
}

export default App;