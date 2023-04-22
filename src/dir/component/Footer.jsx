import React, { useState } from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as image from "./Img";
import {motion} from 'framer-motion'
export default function Footer() {
  const [soon, setSoon] = useState(false);

  return (
    <>
      {soon ? (
        <div className="w-full h-screen flex z-99 fixed top-0 left-0 right-0 bg-white overflow-y-hidden ">
          <div className="w-full flex text-center items-center justify-center text-xl font-bold bg-yellow-400 p-12">
            <div className="text-center flex-wrap">
              <div className="h-12 overflow-hidden flex items-center justify-center">
                <img alt="easystreams" className="w-40" src={image.One} />
              </div>
              <div>
                {" "}
                <h1 className="text-2xl md:text-4xl pb-6">Sports Prediction</h1>
                <span className="capitalize pt-5 pb-2 mt-8"> Coming soon</span>
              </div>
              <button
                className="rounded mt-8 bg-[#182538] text-white px-4 py-2 text-base transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-10"
                onClick={() => setSoon(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-full flex-wrap  h-48 mb-4 bg-yellow-500 flex items-center justify-center bold my-12 text-3xl text-[#182538] overflow-hidden">
        <motion.div  initial={{ x: -100, opacity: 0, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              whileInView={{ x:1, opacity:1 }}
              whileHover={{ scale: 1.2, z:10 }} 
              exit={{ x:  -100, opacity: 0 }}
              whileTap={{ scale: 0.8 }} 
              className="w-full md:w-1/2 flex flex-wrap items-center  justify-center text-xl md:text-3xl">
          <a
            href="https://t.me/easystreamsport"
            
          >
            {" "}
            <FaTelegram className="  mr-2" size={72} />
          </a>{" "}
          <div className="block">
            {" "}
            <a
              href="https://t.me/easystreamsport"
              className="bg-[#182538] px-2 py-1 rounded yellow"
            >
              Subscribe to our telegram channel
            </a>
          </div>
        </motion.div>
        <div className="w-full md:pt-4 md:mt-0 md:w-1/2 flex  justify-center  md:justify-start text-xl md:text-3xl pb-3 md:px-3 px-2">
          Join our telegram page to get the latest sports updates.
        </div>
      </div>
      <div></div>
      <footer className="shadow-xl shadow-black bg-gray-800 mb-16 md:mb-0">
        <div className="  w-full pb-12 px-4 sm:px-6  lg:px-8">
          <div className="lg:pl-32 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="xl:col-span-1 pb-12">
              <div className="h-24 flex justify-start items-center overflow-hidden">
                <a href="https://easystreams.net/">
                  <img
                    src={image.Two}
                    className="h-56 bg-re d-900"
                    alt="Easystreams Logo"
                    title="Easystreams Logo"
                  />
                </a>
              </div>
              <p className="  pt-4 text-white/75 text-sm md:text-base">
                The Best Sport Streaming Website.
              </p>
              <div className="mt-8 flex">
                <a
                  href="https://t.me/easystreamsport"
                  className="text-white hover:text-white/75 flex items-center space-x-2"
                >
                  <span className="sr-only">Telegram</span>
                  <FaTelegram className="text-blue-400 mr-2" size={28} />{" "}
                  <span>Telegram</span>
                </a>
              </div>
            </div>
            <div className="mt-12 flex w-full lg:ml-32  ">
              <div className="w-full flex justify-between  lg:space-x-12 ">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                    Easystreams
                  </h4>
                  <ul className="mt-4">
                    <Link to="/about-us">
                      <li className="mt-4 text-sm md:text-base text-white/75 hover:text-white/50">
                        About
                      </li>
                    </Link>

                    <Link to="/football-streaming">
                      <li className="mt-4 text-sm md:text-base text-white/75 hover:text-white/50">
                        Football
                      </li>
                    </Link>
                    <Link to="/basketball-streaming">
                      <li className="mt-4 text-sm md:text-base text-white/75 hover:text-white/50">
                        Basketball
                      </li>
                    </Link>
                  </ul>
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                    Legal
                  </h4>
                  <ul className="mt-4">
                    <Link to="/policy">
                      <li className="mt-4 text-sm md:text-base text-white/75 hover:text-white/50">
                        Policy
                      </li>
                    </Link>
                    <Link to="/policy">
                      <li className="text-sm md:text-base text-white/75 hover:text-white/50 mt-4">
                        Terms
                      </li>
                    </Link>

                    <Link to="/dmca">
                      <li className="text-sm md:text-base text-white/75 hover:text-white/50 mt-4">
                        DMCA
                      </li>
                    </Link>

                    <Link to="/disclaimer">
                      <li className="text-sm md:text-base text-white/75 hover:text-white/50 mt-4">
                        Disclaimer
                      </li>
                    </Link>
                  </ul>
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                    Support
                  </h4>
                  <ul className="mt-4">
                    <Link to="/contact-us">
                      <li className="text-sm md:text-base text-white/75 hover:text-white/50 mt-4">
                        Contact Us
                      </li>
                    </Link>
                  </ul>
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                    Sports
                  </h4>
                  <ul className="mt-4">
                    <Link to="/league-standing">
                      <li className="text-sm md:text-base text-white/75 hover:text-white/50 mt-4 cursor-pointer">
                        League Standing
                      </li>
                    </Link>
                    <li
                      onClick={() => setSoon(true)}
                      className="text-sm md:text-base text-white/75 hover:text-white/50 mt-4 cursor-pointer"
                    >
                      Prediction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2 border-t border-gray-200 pt-8">
            <p className="text-sm md:text-base text-white xl:text-center">
              © 2022 Easystreams. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
