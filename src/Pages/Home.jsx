import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import MyWork from "../Components/MyWork";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
