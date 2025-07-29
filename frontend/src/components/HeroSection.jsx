import React from "react";
import Navbar from "./Navbar";


const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
        <Navbar/>
        <div className="container">
            <div className="banner">
                <div className="largeBox">
                    <h1 className="title">Delicious</h1>
                    <h1 className="title">Delectable</h1>
                    <h1 className="title">Divine</h1>
                </div>
                <div className="combined_boxes">
                    <div className="imageBox">
                        <img src="/hero111.jpg" alt="hero111" width={4000} />
                    </div>
                    
                </div>
            </div>
            
        </div>
    </section>
  );
};

export default HeroSection;