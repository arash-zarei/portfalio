import React from "react";

// Icons
import { BsArrowUpRight } from "react-icons/bs";
//Motions
import { motion } from "framer-motion";
//Variant
import { fadeIn } from "../variants";
// Services Data
const servicesData = [
  {
    name: "Developer",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos",
    link: "Learn more",
  },
  {
    name: "Designer",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text , image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm Front-end Developer with over 1 yers of experience.
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </motion.div>
          {/* services */}
          <div>
            {servicesData.map((services, index) => {
              const { name, description, link } = services;
              return (
                <motion.div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={index}
                  variants={fadeIn("left", `0.${index+3}`)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {link}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
