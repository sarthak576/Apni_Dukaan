import React from "react";
import Typewriter from "typewriter-effect";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero-section" className="hero-section">
      <div className="hero-content">
        <h2>
          <Typewriter
            options={{
              strings: ["Welcome to Apni-Dukaan !"],
              autoStart: true, 
              loop: true,
            }}
          />
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
