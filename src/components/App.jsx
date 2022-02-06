import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Community from "./Community";
import About from "./About";
import New from "./New";
import Cart from "./Cart";
import data from "./data";


function App() {
  ///
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist){
      setCartItems(
        cartItems.map(x =>
           x.id === product.id ? {...exist, qty: exist.qty +1} : x
        )
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  };
  return (
    <Router>
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={ <Home onAdd={onAdd} products={products} ></Home>} />
          <Route path="/shop" element={ <Shop />} />
          <Route path="/new" element={ <New />} />
          <Route path="/community" element={ <Community />} />
          <Route path="/about" element={ <About />} />
          {/* new */}
          <Route path="/cart" element={<Cart onAdd={onAdd} cartItems={cartItems}></Cart>} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;