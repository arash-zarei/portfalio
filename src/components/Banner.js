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
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold font-secondary lg:text-left"
            >
              ARASH <span>ZAREI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg-text-[60px] font-secondary font-semibold uppercase leading-1"
            >
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
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, harum tempora dolorum suscipit adipisci nemo.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center gap-x-6 max-w-max mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfalio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaTelegram />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
