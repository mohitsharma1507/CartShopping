import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const isAuthenticated = localStorage.getItem("jwtToken");
  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <Home setCartItems={setCartItems} />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/cart"
            element={
              <CartPage cartItems={cartItems} setCartItems={setCartItems} />
            }
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductDetail setCartItems={setCartItems} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
