import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart/Cart";
import Shop from "./components/shop/Shop";
import { ShopContextProvider } from "./context/shopContext";

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
};

export default App;
