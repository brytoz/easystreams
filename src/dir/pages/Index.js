import axios from "axios";
import React, { Fragment, useState } from "react";
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

 
export default function Index() {
  axios.defaults.withCredentials = true;

  const { data,  isLoading } = useQuery(
    ["match-details"],
    async () => await axios.get(`${process.env.REACT_APP_ADMIN}/post-new`)
  );
  const [match_day, setDate] = useState("");

  let objDate = new Date();
  let dd = objDate.getDate();
  if (dd < 10) dd = '0' + dd;
  let mm = objDate.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  let yy = objDate.getFullYear();
  let Ddatef = yy + "-" + mm + "-" + dd;
  let datef = Ddatef.toString();

  let hours = objDate.getHours() + 1
  if(hours < 10) hours = '0' + hours
  let minutes = objDate.getMinutes()
  if(minutes < 10) minutes = '0' + minutes
  let fulltime =   hours + ':' + minutes

  let date = new Date()
  date.setHours(date.getHours() + 1 )

  let nows = new Date()
  nows.setHours(nows.getHours())

  let timenus = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  
  let timeMinus = nows.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })


// if(isLoading) return <Loader />

  return (
    <Fragment>
      <Navbar />
      <Hero />
      <div className="w-full flex-wrap relative ">
        <div className="w-full flex-wrap  h-48 mb-4 bg-yellow-500 flex items-center justify-center bold my-12 text-3xl text-[#182538] overflow-x-hidden">
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
        <div className="relative w-full md:flex md:justify-start">
          <div className="w-full  md:w-1/5">
            <div className="w-full h-full  flex items-center justify-center bold my-12 text-3xl">
              google ads
            </div>
          </div>
          <div className="w-full md:w-3/5 px-2">
            <div className="w-full flex-wrap">{fulltime + '----' +timeMinus + '----' +timenus + '' }
            <input 
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                      type="date"
                      placeholder="Date"
                    />
              <div className="mt-6 mb-6 font-bold text-3xl flex items-center space-x-6 ">
                <BiFootball className="yellow" size={32} /> <h1>Streaming</h1>{" "}
                <BiFootball className="yellow" size={32} />
              </div>
              {data
                ? data.data.slice(0, 10).map((data) => {

                    
                    const nows = new Date();
                    const dateNow = new Date();


                    nows.setHours(nows.getHours() );
                    dateNow.setHours(dateNow.getHours() + 2);
                     
                    const timeNow = nows.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    });

                    // plus new date
                    const timeStringPlus = dateNow.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    });
                    
                    
                    // console.log(timeNow, 'time now without')
                    // console.log(timeStringPlus, 'datenow')

                    return (
                      <MatchLists
                        key={data.id}
                        away={data.away_team}
                        home={data.home_team}
                        time={
                          data ? (
                            datef === data.match_day ? (
                              timeNow > data.match_time && data.match_time <= timeStringPlus ?   (
                                <PulseNotification />
                              ) :
                               (
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
                              timeNow > data.match_time && data.match_time < timeStringPlus ?   '' :
                               (
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
                <Link to="/live-streaming">
                  <span className="bg-yellow-400 cursor-pointer rounded-lg px-3 py-2">
                    Load more
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full  md:w-1/5">
            <div className="w-full h-full  flex items-center justify-center bold my-12 text-3xl">
              google ads
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
