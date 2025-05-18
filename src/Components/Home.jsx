import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Marquee from "./Marquee";
import Eyes from "./Eyes";
import Featured from "./Featured";
import Cards from "./Cards";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Marquee />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
