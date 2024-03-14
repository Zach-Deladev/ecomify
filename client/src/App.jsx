import React from "react";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/productPage" element={<ProductPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
