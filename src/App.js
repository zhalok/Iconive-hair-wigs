import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Category from "./Pages/Category/Category";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Pages/Checkout/Checkout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import CartContext from "./Contexts/CartContext";

function App() {
  const [cartRenderer, setCartRenderer] = useState({});
  return (
    <div className="App">
      <Router>
        {/*
         */}
        {/* <CartContext.Consumer>
          {(value) => {
            console.log(value);
            return <Navigation renderer={value} />;
          }}
        </CartContext.Consumer> */}
        <Navigation renderer={cartRenderer} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catagory" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/ProductDetails/:product"
            element={
              // <CartContext.Provider value={cartRenderer}>
              <ProductDetails setCartRenderer={setCartRenderer} />
              // </CartContext.Provider>
            }
          />
          <Route path="/aboutus" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
