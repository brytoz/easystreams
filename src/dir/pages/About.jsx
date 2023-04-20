import { motion } from "framer-motion";
import React, { Fragment, useLayoutEffect } from "react";
import { BiFootball } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import BottomNav from "../component/BottomNav";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Fragment>
      <Navbar />
      <div className="overflow-x-hidden w-full flex-wrap  h-48 mb-4 bg-yellow-500 flex items-center justify-center bold my-12 text-3xl text-[#182538]">
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          whileInView={{ x: 1, opacity: 1 }}
          whileHover={{ scale: 1.2, z: 10 }}
          exit={{ x: -100, opacity: 0 }}
          whileTap={{ scale: 0.8 }}
          className="w-full md:w-1/2 flex flex-wrap items-center  justify-center text-xl md:text-3xl"
        >
          <a href="https://t.me/easystreamsport">
            {" "}
            <FaTelegram className="  mr-2" size={72} />
          </a>{" "}
          <div className="block">
            {" "}
            <a
              href="https://t.me/+cTOn5enFWBQ2YjJk"
              className="bg-[#182538] px-2 py-1 rounded yellow"
            >
              Telegram
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          whileInView={{ x: 1, opacity: 1 }}
          whileHover={{ scale: 1.2, z: 10 }}
          exit={{ x: -100, opacity: 0 }}
          whileTap={{ scale: 0.8 }}
          className="w-full md:pt-4 md:mt-0 md:w-1/2 flex  justify-center  md:justify-start text-xl md:text-3xl pb-3 md:px-3 px-2"
        >
          <a
            href="https://t.me/+cTOn5enFWBQ2YjJk"
            className="bg-[#182538] px-2 py-1 rounded yellow"
          >
            Click here to get today's prediction for free.
          </a>
        </motion.div>
      </div>
      <div className="  flex  justify-center items-center pb-8">
        <div className="flex-wrap justify-center items-center px-6 md:px-32 xl:px-64 space-y-12">
          <div className="  space-y-6 flex-wrap justify-center items-center ">
            <div className="mt-6 font-bold text-3xl flex items-center space-x-6 ">
              <BiFootball className="yellow" size={24} /> <h1>ABOUT US</h1>{" "}
              <BiFootball className="yellow" size={24} />
            </div>
            <div className="text-base space-y-6 leading-loose  flex-wrap justify-center items-center">
              <p>
                EASYSTREAMS offers a wide range of HD football live streams TV
                channels were you can watch all your favorite football games.
                All our football TV channels are made easy and user friendly,
                meaning, streams placed on our site are been compatible with
                your mobile devices, tablets, computers and more. Through
                EASYSTREAMS, all your favorite leagues can be livestreamed
                starting from European Champions League, LaLiga, European
                Premier League, Bundesliga, Italian Ligue, Ligue 1 and all major
                to urnaments all around the globe. EASYSTREAMS website is
                entirely a free website with all credits given to official
                channels we get our streams from such as SkySports, Beinsports
                etc. Make sure to have a great time on our site while watching
                your favorite game.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BottomNav />
    </Fragment>
  );
}

export default About;
