import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MatchLists({
  country,
  home,
  away,
  league,
  img1,
  img2,
  time,
  sportType,
  link,
  linkId,
  day,
  sport_icon,
}) {
  return (
    <div className="w-full">
      <a href={`${process.env.REACT_APP_LINK}match-details/${link}/${linkId}`}>
        <div className="bg-[#f3e012] cursor-pointer rounded-xl h-auto flex justify-center items-center w-full mt-2 text-black focus:outline-none focus:shadow-outline shadow-md shadow-green-900/50 py-4 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-10 ">
          <div className=" w-full px-5">
            <div className="text-gray-900/75 text-normal regular flex justify-between">
              <div>
                {sportType} {sport_icon}
              </div>
              <div>{country}</div>
            </div>
            <div className="flex w-full   justify-between items-center">
              <div className="flex-wrap">
                <div className=" text-base md:text-xl pt-2 flex items-center space-x-2 ">
                  {" "}
                  <img alt="team 1" className="h-10 w-10 rounded-full text-sm " src={img1} />
                  <div className="capitalize"> {home}</div>
                </div>

                <div className=" text-base md:text-xl pt-2 flex items-center space-x-2 ">
                  {" "}
                  <img
                    alt="team 2"
                    className="h-10 w-10 rounded-full text-sm"
                    src={img2}
                  />
                  <div className="capitalize"> {away}</div>
                </div>
              </div>

              <div className="text-sm text-center opacity-75 flex-wrap justify-center">
                <div>{day}</div>
                <div>{time}</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default MatchLists;
