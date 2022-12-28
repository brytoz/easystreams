import React from "react";
import * as imgs from "./Img";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const bounceTransition = {
    y: {
      duration: 0.94,
      yoyo: Infinity,
      ease: "easeOut",
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.1,
    },
  };
  return (
    <section className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 pb- relative block ">
      <div className="black flex-wrap px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
        <div className="w-full h-auto md:flex justify-center -mb-4 md:mb-0">
          <div className=" w-full md:w-1/2 flex-wrap md:flex  justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="-mt-4 md:mt-0 max-w-xl mb-24 font-big"
            >
              <h2 className="max-w-lg mb-6 font-bold tracking-tight  sm:leading-none text-5xl md:text-7xl xl:text-6xl text-center md:text-left  md:mt-0">
                Easystreams{" "}
                <div className="pt-6 md:hidden" />
                <span className="bg-[#182538]  text-yellow-400 px-2 -py-3 md:text-5xl rounded">
                  Sports{" "}
                </span>{" "}
                <br />
                <div className="mt-12  md:text-7xl">
                  The best sports streaming Website.
                </div>
              </h2>
            </motion.div>
          </div>
          <div className="w-full  md:w-1/2 relative ">
            <motion.div>
              <motion.img initial={{ x: -100, opacity: 0, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              whileInView={{ x:1, opacity:1 }}
              whileHover={{ scale: 1.2, z:10 }} 
              exit={{ x:  -100, opacity: 0 }}
              whileTap={{ scale: 0.8 }} 
              src={imgs.Land}  className="h-4/5 -mt-14 md:mt-0"/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
