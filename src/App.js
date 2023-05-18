import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/Allinone";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Support/>
      <AllInOne/>
      <Footer/>
      </>
  );
}

export default App;
