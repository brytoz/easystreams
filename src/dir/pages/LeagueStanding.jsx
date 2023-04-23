import React, { Fragment, useLayoutEffect, useState } from "react";
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
import { motion } from "framer-motion";

function LeagueStanding() {
  const [selectedLeague, setSelectedLeague] = useState('England');


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
              <BiFootball className="yellow" size={24} />{" "}
              <h1>League Standing</h1>{" "}
              <BiFootball className="yellow" size={24} />
            </div>
            

            <div className="w-full  bg-[#f3e012] text-base  first-line: border leading-loose  flex justify-center items-center">
              <select
                className="w-full p-3 border-0 bg-inherit text-black capitalize flex-1 text-xs md:text-sm font-bold"
                value={selectedLeague}
                onChange={(e) => setSelectedLeague(e.target.value)}
              >
                <option value="England">England Premier League Table</option>
                <option value="Spain">Spain Satander Table</option>
                <option value="Italy">Italy Serie A Table</option>
                <option value="France">French Ligue 1  Table</option>
                <option value="Germany">Germany Bundesliga Table</option>
                <option value="Portugal">Portugal League Table</option>
                <option value="Holland">Holland League Table</option>
              </select>
            </div>
            {selectedLeague === 'England' && <England />}
      {selectedLeague === 'Italy' && <Italy />}
      {selectedLeague === 'Spain' && <Spain />}
      {selectedLeague === 'Holland' && <Holland />}
      {selectedLeague === 'Germany' && <Germany />}
      {selectedLeague === 'France' && <France />}
      {selectedLeague === 'Portugal' && <Portugal />}
            <div className="text-base space-y-6 leading-loose  flex-wrap justify-center items-center">
              <p>This Table contains only the favorite league.</p>
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
