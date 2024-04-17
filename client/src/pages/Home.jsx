import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import BestSellers from "../components/BestSellers";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import EmailPopup from "../components/EmailPopup"; // Import the EmailPopup component

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true); // Display the popup after 3 seconds
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []); // Run this effect only once after component mount

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <>
      <Hero />
      <Collections />
      <BestSellers />
      <Testimonials />
      <Benefits />
      {showPopup && <EmailPopup onClose={handleClosePopup} />} {/* Display the popup if showPopup is true */}
    </>
  );
};

export default Home;
