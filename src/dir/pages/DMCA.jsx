import React, { Fragment, useLayoutEffect } from "react";
import { BiFootball } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import BottomNav from "../component/BottomNav";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import {motion} from 'framer-motion'

function DMCA() {
  useLayoutEffect(() => {
    window.scrollTo(0,0)
    
    })
  return (
    <Fragment>
      <Navbar />

      <div className="  flex  justify-center items-center pb-8">
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
        <div className="flex-wrap justify-center items-center px-6 md:px-32 xl:px-64 space-y-12">
          <div className="  space-y-6 flex-wrap justify-center items-center ">
            <div className="mt-6 font-bold text-3xl flex items-center space-x-6 ">
              <BiFootball className="yellow" size={24} /> <h1>DMCA</h1>{" "}
              <BiFootball className="yellow" size={24} />
            </div>
            <div className="text-base space-y-6 leading-loose  flex-wrap justify-center items-center">
              <p>
                This Website contains only the favorite channels and 3rd party
                sites are not affiliated in any way responsible for their
                content that are freely available to all Internet. All content
                is a copyright of their respective owners We are on the side of
                the Iframe link and tick the Embeded code. We are not their
                responsibility.
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

export default DMCA;
