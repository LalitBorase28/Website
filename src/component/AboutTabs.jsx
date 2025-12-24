import React from "react";
import Features from "./Features";
import { motion } from "framer-motion";
import Bubbles from "./Bubbles"


const AboutTabs = () => {
  return (
    <section className="relative w-full overflow-hidden">

      <div
        className="
          relative pt-10
          bg-linear-to-br from-[#e7e0a5] via-[#e6e2aff3] to-[#ece5a6]
        "
      >
      <Bubbles />

     

        <div className="relative pb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-[#1f2933]">
                Platform Features
              </h2>

              {/* Accent divider */}
              <div className="flex justify-center mt-3">
                <div className="h-0.75 w-44 rounded-full bg-linear-to-r from-transparent via-indigo-500 to-transparent" />
              </div>

              <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                Powerful verification tools designed for{" "}
                <span className="text-indigo-600 font-semibold">
                  security, efficiency
                </span>{" "}
                and seamless digital trust.
              </p>
            </div>

            <Features />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default AboutTabs;
