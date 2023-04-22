import React from "react";
import * as imgs from "./Img";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiBasketball, BiFootball } from "react-icons/bi";

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
        <div className="w-full h-auto md:flex justify-center   md:mb-0">
          <div className=" w-full md:w-1/2 flex-wrap md:flex  justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="-mt-4 md:mt-0 max-w-xl mb-24 font-big"
            >
              <h2 className="max-w-lg md:pt-12  font-bold tracking-tight  sm:leading-none text-3xl md:text-5xl   text-center md:text-left  md:mt-0">
                Easystreams  
                <span className="bg-[#182538] ml-2 text-yellow-400 px-2 -py-3 md:text-4xl rounded">
                  Sports{" "}
                </span>{" "}
                <br />
                <div className="mt-4 md:mt-16  md:text-5xl">
                  The best sports streaming Website.
                </div>
              </h2>
              <div className="hidden md:flex w-3/4  pt-12 justify-between items-center">
                <Link to='/football-streaming' className="hover:text-[#182538] hover:bg-gray-300 bg-[#182538] flex items-center px-4 py-2 rounded text-white cursor-pointer text-base">Football <BiFootball className="ml-2 yellow" size={22} /></Link>

                <Link to='/basketball-streaming' className="hover:text-[#182538] hover:bg-gray-300 bg-[#182538] flex items-center px-4 py-2 rounded text-white cursor-pointer text-base">Basketball <BiBasketball className="ml-2 yellow" size={22} /></Link>
              </div>
            </motion.div>
          </div>
          <motion.div className="w-full  md:w-1/2 flex justify-center items-center relative   ">
            <motion.img
              initial={{ x: -100, opacity: 0, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              whileInView={{ x: 1, opacity: 1 }}
              whileHover={{ scale: 1.2, z: 10 }}
              exit={{ x: -100, opacity: 0 }}
              whileTap={{ scale: 0.8 }}
              src={imgs.Land}
              className="h-1/5 md:h-fit w-2/4 md:w-3/4 flex-justify-center mb-[-1rem] -mt-16 md:mt-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
