import React, { Fragment, useState } from "react";
import { BiFootball } from "react-icons/bi";
import BottomNav from "../component/BottomNav";
import Footer from "../component/Footer"; 
import England from "../component/standing/England";
import Italy from "../component/standing/Italy";
import Spain from "../component/standing/Spain";
import Holland from "../component/standing/Holland";
import Germany from "../component/standing/Germany";
import France from "../component/standing/France";
import Portugal from "../component/standing/Portugal";
import Navbar from "../component/Navbar";
import { FaTelegram } from "react-icons/fa";
import {motion} from 'framer-motion'

function LeagueStanding() {
  const [england, setEngland] = useState(true);
  const [spain, setSpain] = useState(false);
  const [germany, setGermany] = useState(false);
  const [portugal, setPortugal] = useState(false);
  const [france, setFrance] = useState(false);
  const [italy, setItaly] = useState(false);
  const [holland, setHolland] = useState(false);

  const showEngland = () => {
    setEngland(true);
    setSpain(false);
    setGermany(false);
    setPortugal(false);
    setFrance(false);
    setItaly(false);
    setHolland(false);
  };

  const showSpain = () => {
    setEngland(false);
    setSpain(true);
    setGermany(false);
    setPortugal(false);
    setFrance(false);
    setItaly(false);
    setHolland(false);
  };

  const showGermany = () => {
    setEngland(false);
    setSpain(false);
    setGermany(true);
    setPortugal(false);
    setFrance(false);
    setItaly(false);
    setHolland(false);
  };

  const showPortugal = () => {
    setEngland(false);
    setSpain(false);
    setGermany(false);
    setPortugal(true);
    setFrance(false);
    setItaly(false);
    setHolland(false);
  };

  const showFrance = () => {
    setEngland(false);
    setSpain(false);
    setGermany(false);
    setPortugal(false);
    setFrance(true);
    setItaly(false);
    setHolland(false);
  };

  const showItaly = () => {
    setEngland(false);
    setSpain(false);
    setGermany(false);
    setPortugal(false);
    setFrance(false);
    setItaly(true);
    setHolland(false);
  };

  const showHolland = () => {
    setEngland(false);
    setSpain(false);
    setGermany(false);
    setPortugal(false);
    setFrance(false);
    setItaly(false);
    setHolland(true);
  };

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
              <BiFootball className="yellow" size={24} />{" "}
              <h1 >League Standing</h1>{" "}
              <BiFootball className="yellow" size={24} />
            </div>
            <div className="darkMode text-base w-full border leading-loose  flex justify-center items-center">
              <button
                onClick={showEngland}
                className={
                  england
                    ? "bg-[#f3e012] text-black capitalize flex-1 text-xs md:text-sm"
                    : `h-full flex-1 capitalize text-xs md:text-sm`
                }
              >
                <h3 className="py-3 w-full">England</h3>
              </button>

              <button
                onClick={showSpain}
                className={
                  spain
                    ? "bg-[#f3e012] text-black capitalize flex-1 text-xs md:text-sm"
                    : `h-full flex-1 capitalize text-xs md:text-sm`
                }
              >
                <h3 className="py-3 w-full">Spain</h3>
              </button>
              <button
                onClick={showItaly}
                className={
                  italy
                    ? "bg-[#f3e012] text-black capitalize flex-1 text-xs md:text-sm"
                    : `h-full flex-1 capitalize text-xs md:text-sm`
                }
              >
                <h3 className="py-3 w-full">Italy</h3>
              </button>

              <button
                onClick={showFrance}
                className={
                  france
                    ? "bg-[#f3e012] text-black capitalize flex-1 text-xs md:text-sm"
                    : `h-full flex-1 capitalize text-xs md:text-sm`
                }
              >
                <h3 className="py-3 w-full">france</h3>
              </button>

              <button
                onClick={showGermany}
                className={
                  germany
                    ? "bg-[#f3e012] text-black capitalize flex-1 text-xs md:text-sm"
                    : `h-full flex-1 capitalize text-xs md:text-sm`
                }
              >
                <h3 className="py-3 w-full">germany</h3>
              </button>

              <button
                onClick={showPortugal}
                className={
                  portugal
                    ? "bg-[#f3e012] text-black capitalize flex-1 text-xs md:text-sm"
                    : `h-full flex-1 capitalize text-xs md:text-sm`
                }
              >
                <h3 className="py-3 w-full">portugal</h3>
              </button>

              <button
                onClick={showHolland}
                className={
                  holland
                    ? "bg-[#f3e012] text-black capitalize flex-1 text-xs md:text-sm"
                    : `h-full flex-1 capitalize text-xs md:text-sm`
                }
              >
                <h3 className="py-3 w-full">holland</h3>
              </button>
            </div>

            {england && <England />}
            {italy && <Italy />}
            {spain && <Spain />}
            {holland && <Holland />}
            {germany && <Germany />}
            {france && <France />}
            {portugal && <Portugal />}
            <div className="text-base space-y-6 leading-loose  flex-wrap justify-center items-center">
              <p>
                This Table contains only the favorite league.  
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

export default LeagueStanding;
