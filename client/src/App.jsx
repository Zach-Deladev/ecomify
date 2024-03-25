import React from "react";
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
