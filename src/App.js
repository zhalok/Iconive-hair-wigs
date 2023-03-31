import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Category from "./Pages/Category/Category";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Pages/Checkout/Checkout";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catagory" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/aboutus" element={<Home />} />
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
