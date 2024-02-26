import React from 'react'
import Products from "../components/Products";
import Footer from "../components/Footer";
// import FilterBar from "../components/FilterBar.jsx"

// This page is to display the Shop listings page

const Shop = () => {
  return (
    <>
    
     {/* Potentially add in a filtering side bar */}
    {/* <FilterBar/> */}
    <Products />
      <Footer />
     </>
  )
}

export default Shop