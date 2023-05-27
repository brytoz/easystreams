import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import BottomNav from "../component/BottomNav";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import MatchLists from "../component/MatchLists";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import { BiFootball } from "react-icons/bi";
import { FaBasketballBall, FaTelegram } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";
import { motion } from "framer-motion";
import { PulseNotification } from "../component/PulseNotification";
import moment from "moment-timezone";
import GoogleAds from "../component/GoogleAds";
import Marquee from "../component/Marquee";
import { DarkModeContext } from "../contexts/darkModeContext";
import { TelegramAds } from "../component/TelegramAds";
import { TelegramLink } from "../component/TelegramLink";

export default function Home() {
  axios.defaults.withCredentials = true;
  const { dispatch, darkMode } = useContext(DarkModeContext);

  const { data, isLoading } = useQuery(
    ["match-details"],
    async () => await axios.get(`${process.env.REACT_APP_ADMIN}/post-new`)
  );

  const dtime = moment().tz("Africa/Lagos").format("HH:mm");
  const dtimeAgo = moment()
    .tz("Africa/Lagos")
    .subtract(2, "hours")
    .format("HH:mm");
  const dDate = moment().tz("Africa/Lagos").format("YYYY-MM-DD");

  // if (isLoading) return <Loader />;

  return (
    <Fragment>
      <Navbar />
      <Hero />

      <Marquee />
      <div className="w-full flex-wrap relative overflow-hidden">
        <div className="w-full   flex   justify-center px-4 ">
          <TelegramLink />
        </div>
        <div className="relative w-full md:flex md:justify-start">
          <div className="w-full  md:w-1/5">
            <div className="w-full h-full  flex items-center justify-center bold my-12 text-3xl">
              {/* google ads */}
              {/* 
              <GoogleAds
                glass="w-full h-full md:h-60 pr-2 hidden md:inline-block"
                slot="8326626700"
              /> */}
            </div>
          </div>

          <div className="w-full md:w-3/5 px-2">
            <div className="w-full flex-wrap">
              <div className="mt-6 mb-6 font-bold text-3xl flex items-center space-x-6 ">
                <BiFootball className="yellow" size={32} /> <h1>Streaming</h1>{" "}
                <BiFootball className="yellow" size={32} />
              </div>
              {data
                ? data.data.slice(0, 10).map((data) => {
                    return (
                      <MatchLists
                        key={data.id}
                        away={data.away_team}
                        home={data.home_team}
                        time={
                          data ? (
                            dDate === data.match_day ? (
                              data.match_time <= dtime ? (
                                data.match_time >= dtimeAgo ? (
                                  <PulseNotification />
                                ) : dtimeAgo > data.match_time ? (
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
                            dDate === data.match_day ? (
                              data.match_time <= dtime ? (
                                data.match_time >= dtimeAgo ? (
                                  ""
                                ) : dtimeAgo > data.match_time ? (
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
                        img1={`https://server.easystreams.net/${data.home_img}`}
                        img2={`https://server.easystreams.net/${data.away_img}`}
                        linkId={data.ref}
                        link={data.id}
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
                : null}

              <div className="w-full flex justify-center pt-8">
                {/* <GoogleAds
                  glass="w-1/2 flex justify-center h-full md:h-60 inline-block "
                  slot="9331162165"
                />  */}
              </div>
              <div className="w-full flex justify-center pt-8 pb-3">
                <Link to="/football-streaming">
                  <span className="bg-yellow-400 text-black cursor-pointer rounded-lg px-3 py-2">
                    Load more
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full  md:w-1/5">
            <div className="w-full h-full  flex items-center justify-center bold my-12 text-3xl">
              {/* google ads */}
              {/* <GoogleAds
                glass="w-full h-full  pr-2 hidden md:inline-block"
                slot="8326626700"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BottomNav />
    </Fragment>
  );
}

// export default Index;
