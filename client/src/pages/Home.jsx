import React from "react";
import Hero from "../components/Hero";
import Product from "../components/Product-main"
import Categories from "../components/Categories";
import BestSellers from "../components/BestSellers";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <Categories />
      <BestSellers />
      <Reviews />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Home;
