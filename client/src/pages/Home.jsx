import React from "react";
import Hero from "../components/Hero";
import Collections from "../components/collections";
import BestSellers from "../components/BestSellers";
import Benefits from "../components/benefits";

import Testimonials from "../components/testimonials";
const Home = () => {
  return (
    <>
      <Hero />
      <Collections />
      <BestSellers />
      <Testimonials />
      <Benefits />
      
    </>
  );
};

export default Home;
