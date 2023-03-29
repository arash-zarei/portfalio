import React from "react";

// Motion
import { motion } from "framer-motion";
// Variant
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div className="py-16 mb-32 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex justify-center items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's Work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <input
              type="text"
              placeholder="Your email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <textarea
              placeholder="Your message"
              className="resize-none bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
