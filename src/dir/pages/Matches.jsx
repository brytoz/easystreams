import axios from "axios";
import { motion } from "framer-motion";
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { BiFootball } from "react-icons/bi";
import { FaBasketballBall, FaTelegram } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";
import BottomNav from "../component/BottomNav";
import Footer from "../component/Footer";
import MatchLists from "../component/MatchLists";
import Navbar from "../component/Navbar";
import { PulseNotification } from "../component/PulseNotification";
let first = null;
let second = null;
let third = null;
function Matches() {
  axios.defaults.withCredentials = true;

  const [newM, setNew] = useState(false);
  const [old, setOld] = useState(true);

  const fetchData = async () => {
    const dataOneAPI = `${process.env.REACT_APP_ADMIN}/post-old`;
    const dataTwoAPI = `${process.env.REACT_APP_ADMIN}/post-new-update`;
    const dataThreeAPI = `${process.env.REACT_APP_ADMIN}/post-upcoming`;

    const getDataOne = await axios.get(dataOneAPI);
    const getDataTwo = await axios.get(dataTwoAPI);
    const getDataThree = await axios.get(dataThreeAPI);
    axios.all([getDataOne, getDataTwo, getDataThree]).then(
      axios.spread((...allData) => {
        const firstAPI = allData[0].data;
        const secondAPI = allData[1].data;
        const thirdAPI = allData[2].data;
        if (firstAPI) {
          first = [];
          firstAPI.map((data) => first.push(data));
        }

        if (secondAPI) {
          second = [];
          secondAPI.map((data) => second.push(data));
        }
        if (thirdAPI) {
          third = [];
          thirdAPI.map((data) => third.push(data));
        }
      })
    );
  };

  let objDate = new Date();
  let dd = objDate.getDate();
  if (dd < 10) dd = "0" + dd;
  let mm = objDate.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;
  let yy = objDate.getFullYear();
  let Ddatef = yy + "-" + mm + "-" + dd;
  let datef = Ddatef.toString();

  // time
  // let hours = objDate.getHours()  - 2
  // if(hours < 10) hours = '0' + hours
  // let minutes = objDate.getMinutes()
  // if(minutes < 10) minutes = '0' + minutes
  // let fulltime =   hours + ':' + minutes

  let now = new Date();
  now.setHours(now.getHours());

  let timeNow = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  let minus = new Date();
  minus.setHours(minus.getHours() - 2);

  let timeMinus = minus.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    fetchData();
  }, []);

  const showOldMatch = () => {
    setNew(false);
    setOld(true);
  };

  const showNewMatch = () => {
    setOld(false);
    setNew(true);
  };

  return (
    <Fragment>
      <Navbar />

      <div className="md:px-32 xl:px-64  mt-6 font-bold text-3xl flex items-center space-x-6 ">
        <BiFootball className="yellow" size={24} />{" "}
        <h1>Match Streaming Update</h1>{" "}
        <BiFootball className="yellow" size={24} />
      </div>
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

      <div className="w-full flex-wrap relative">
        <div className="md:px-32 xl:px-64 mb-6 ">
          <div className="darkMode text-base w-full border leading-loose  flex justify-center items-center">
            <button
              onClick={showOldMatch}
              className={
                old
                  ? "bg-[#f3e012] text-black capitalize flex-1 text-xs md:text-sm"
                  : `h-full flex-1 capitalize text-xs md:text-sm`
              }
            >
              <h3 className="py-3 w-full">Previous Matches</h3>
            </button>

            <button
              onClick={showNewMatch}
              className={
                newM
                  ? "bg-[#f3e012] text-black capitalize flex-1 text-xs md:text-sm"
                  : `h-full flex-1 capitalize text-xs md:text-sm`
              }
            >
              <h3 className="py-3 w-full">New Matches</h3>
            </button>
          </div>
        </div>

        <div className="relative w-full md:flex md:justify-start">
          <div className="w-full  md:w-1/5">
            <div className="w-full h-full  flex items-center justify-center bold my-12 text-3xl">
              Advertise Here
            </div>
          </div>
          <div className="w-full md:w-3/5 px-2">
            {newM
              ? second
                ? second.map((data) => {
                    return (
                      <MatchLists
                        key={data.id}
                        away={data.away_team}
                        home={data.home_team}
                        // sportType={data.sport_type}
                        img1={`https://server.easystreams.net/${data.home_img}`}
                        img2={`https://server.easystreams.net/${data.away_img}`}
                        linkId={data.ref}
                        link={data.id}
                        time={
                          data ? (
                            datef === data.match_day ? (
                              data.match_time <= timeNow ? (
                                data.match_time >= timeMinus ? (
                                  <PulseNotification />
                                ) : timeMinus > data.match_time ? (
                                  ""
                                ) : (
                                  data.match_time
                                )
                              ) : (
                                data.match_time
                              )
                            ) : (
                              data.match_time
                            )
                          ) : null
                        }
                        day={
                          data ? (
                            datef === data.match_day ? (
                              data.match_time <= timeNow ? (
                                data.match_time >= timeMinus ? (
                                  ""
                                ) : timeMinus > data.match_time ? (
                                  <div className="text-xl">Finished</div>
                                ) : (
                                  data.match_day
                                )
                              ) : (
                                data.match_day
                              )
                            ) : (
                              data.match_day
                            )
                          ) : null
                        }
                        country={data.league}
                        sport_icon={
                          data.sport_type === "Football" ? (
                            <div className="flex items-center space-x-2">
                              <BiFootball className="white" size={32} />{" "}
                              <span> Football </span>{" "}
                            </div>
                          ) : data.sport_type === "Tennis" ? (
                            <div className="flex items-center space-x-2">
                              <GiTennisRacket className="green" size={32} />{" "}
                              <span> Tennis </span>{" "}
                            </div>
                          ) : data.sport_type === "Basketball" ? (
                            <div className="flex items-center space-x-2">
                              <FaBasketballBall className="brown" size={32} />
                              <span>Basketball </span>{" "}
                            </div>
                          ) : (
                            "Sport"
                          )
                        }
                      />
                    );
                  })
                : null
              : null}
            {old
              ? first
                ? first.slice(0, 20).map((data) => (
                    <MatchLists
                      key={data.id}
                      away={data.away_team}
                      home={data.home_team}
                      // sportType={data.sport_type}
                      // time={data.match_time}
                      img1={`https://server.easystreams.net/${data.home_img}`}
                      img2={`https://server.easystreams.net/${data.away_img}`}
                      linkId={data.ref}
                      link={data.id}
                      day={data.scores}
                      country={data.league}
                      sport_icon={
                        data.sport_type === "Football" ? (
                          <div className="flex items-center space-x-2">
                            <BiFootball className="white" size={32} />{" "}
                            <span> Football </span>{" "}
                          </div>
                        ) : data.sport_type === "Tennis" ? (
                          <div className="flex items-center space-x-2">
                            <GiTennisRacket className="green" size={32} />{" "}
                            <span> Tennis </span>{" "}
                          </div>
                        ) : data.sport_type === "Basketball" ? (
                          <div className="flex items-center space-x-2">
                            <FaBasketballBall className="brown" size={32} />
                            <span>Basketball </span>{" "}
                          </div>
                        ) : (
                          "Sport"
                        )
                      }
                    />
                  ))
                : null
              : null}
            <div className="darkMode text-base w-full border leading-loose  flex justify-center items-center mt-5">
              <button className="bg-[#182538] cursor-auto text-white capitalize flex-1 text-xs  h-full   md:text-sm">
                <h3 className="py-3 w-full text-xl font-bold">
                  Upcoming Matches
                </h3>
              </button>

            </div>
            <div className="w-full mt-2 pt-2">{third  ? third.map((data) => (
                    <MatchLists
                      key={data.id}
                      away={data.away_team}
                      home={data.home_team}
                      // sportType={data.sport_type}
                      // time={data.match_time}
                      img1={`https://server.easystreams.net/${data.home_img}`}
                      img2={`https://server.easystreams.net/${data.away_img}`}
                      linkId={data.ref}
                      link={data.id}
                      day={data.match_day}
                      time={data.match_time}
                      country={data.league}
                      sport_icon={
                        data.sport_type === "Football" ? (
                          <div className="flex items-center space-x-2">
                            <BiFootball className="white" size={32} />{" "}
                            <span> Football </span>{" "}
                          </div>
                        ) : data.sport_type === "Tennis" ? (
                          <div className="flex items-center space-x-2">
                            <GiTennisRacket className="green" size={32} />{" "}
                            <span> Tennis </span>{" "}
                          </div>
                        ) : data.sport_type === "Basketball" ? (
                          <div className="flex items-center space-x-2">
                            <FaBasketballBall className="brown" size={32} />
                            <span>Basketball </span>{" "}
                          </div>
                        ) : (
                          "Sport"
                        )
                      }
                    />
                  ))
                : null}</div>

          </div>

          <div className="w-full  md:w-1/5">
            <div className="w-full h-full  flex items-center justify-center bold my-12 text-3xl">
              Advertise Here
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BottomNav />
    </Fragment>
  );
}

export default Matches;
