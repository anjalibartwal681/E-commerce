// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Items from "./component/ProductItems/Items";
import Navbar from "./component/navbar/navbar";
import { useState } from "react";
import Cart from "./component/navbar/Cart";
import LoginModal from "./component/navbar/login";
import SignupModal from "./component/navbar/signup";
import FectApiData from "./apigetdata/getdata";
// import UserPage from "./component/user/user";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(">>>>>>>>cart", cart);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar addToCart={addToCart} />} />
        <Route path="/item" element={<Items addToCart={addToCart} />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignupModal />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
      
    </div>
  );
}

export default App;
