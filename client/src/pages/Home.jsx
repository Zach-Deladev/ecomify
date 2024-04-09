import React from "react";
import Hero from "../components/Hero";
import Collections from "../components/collections"
import BestSellers from "../components/BestSellers";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <Collections />
      <BestSellers />
      <Testimonials />
      <Benefits />
      <Footer />
    </>
  );
};

export default Home;
