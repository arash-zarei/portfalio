import React from "react";

// Images
import Image from "../assets/avatar.svg";
// Icons
import { FaInstagram, FaTelegram, FaGithub } from "react-icons/fa";
// Animations
import { TypeAnimation } from "react-type-animation";
// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          <div>
            <h1>
              ARASH <span>ZAREI</span>
            </h1>
            <div className="mb-6 text-[36px] lg-text-[60px] font-secondary font-semibold uppercase leading-1">
              <span className="mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Programmer",
                  2000,
                  "React Developer",
                  2000,
                  "FrontEnd Developer",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                className="text-accent"
              />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, harum tempora dolorum suscipit adipisci nemo.
            </p>
            <div>
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfalio
              </a>
            </div>
          </div>
          <div>
            <img src={Image} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
