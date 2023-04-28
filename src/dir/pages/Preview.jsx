import axios from "axios";
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import BottomNav from "../component/BottomNav";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import { BiFootball } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import GoogleAds from "../component/GoogleAds";
import { TelegramAds } from "../component/TelegramAds";

function Preview() {
  axios.defaults.withCredentials = true;

  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery(
    ["match-details"],
    async () => await axios.get(`${process.env.REACT_APP_ADMIN}/post/${id}`)
  );
  const [links, setLink] = useState(false);

  if (isError) {
    navigate("/not-available");
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Fragment>
      <Navbar />

      <div className="w-full flex-wrap relative">
        <div className="w-full text-center   mt-6 font-bold text-3xl flex items-center justify-center space-x-6 ">
          <BiFootball className="yellow" size={32} />{" "}
          <h1>
            {data ? (
              <div className="w-full  flex items-center justify-center  text-base">
                <div className="w-2/4 flex items-center justify-center ">
                  {" "}
                  <img
                    alt="team 1"
                    className="text-xs h-10 w-10 rounded-full mr-2"
                    src={`https://server.easystreams.net/${data.data[0].home_img}`}
                  />
                  <span className="text-sm md:text-xl">
                    {" "}
                    {data.data[0].home_team}{" "}
                  </span>
                </div>{" "}
                <div className="w-1/4">
                  <span className="px-1 mx-2 py-.5 rounded bg-[#182538] text-[#f3e012]">
                    vs
                  </span>{" "}
                </div>
                <div className="w-2/4  flex items-center justify-center">
                  {" "}
                  <span className="text-sm md:text-xl">
                    {" "}
                    {data.data[0].away_team}{" "}
                  </span>
                  <img
                    alt="team 2"
                    className="h-10 w-10 rounded-full ml-2 text-xs"
                    src={`https://server.easystreams.net/${data.data[0].away_img}`}
                  />
                </div>
              </div>
            ) : null}{" "}
          </h1>{" "}
          <BiFootball className="yellow" size={32} />
        </div>

        <div className="w-full flex-wrap  h-auto mb-4 flex items-center justify-center bold my-12 overflow-x-hidden">
          <TelegramAds />
        </div>
        <div className="relative w-full md:flex md:justify-start ">
          <div className="w-full  md:w-1/5">
            <div className="w-full h-full bg-yellow-400 flex items-center justify-center bold my-12 text-3xl">
              {/* google ads */}
            </div>
          </div>
          <div className="w-full md:w-3/5 px-2">
            <div className="w-full flex-wrap px-4">
              {isError ? (
                <div className="w-full p-4 text-center">
                  {" "}
                  Please check your internet connection.
                </div>
              ) : null}

              <table className="w-full text-xs md:text-base">
                <thead>
                  <tr className="border-b border-yellow-700 text-xl">
                    <th className="text-center p-1 py-3 pb-2">Match</th>
                    <th className="text-center p-1 py-3 pb-2">Details</th>
                  </tr>
                </thead>

                <tbody className=" border border-yellow-400">
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">Home Team</td>
                    <td className="text-center p-1 py-3 capitalize">
                      {data ? data.data[0].home_team : null}
                    </td>
                  </tr>
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">Away Team</td>
                    <td className="text-center p-1 py-3 capitalize">
                      {data ? data.data[0].away_team : null}
                    </td>
                  </tr>
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">Kick-Off</td>
                    <td className="text-center p-1 py-3">
                      {data
                        ? data.data[0].match_day +
                          " |" +
                          "| " +
                          data.data[0].match_time
                        : null}
                    </td>
                  </tr>
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">Fulltime-Score</td>
                    <td className="text-center p-1 py-3">
                      {data ? data.data[0].scores : null}
                    </td>
                  </tr>
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">Sport</td>
                    <td className="text-center p-1 py-3">
                      {data ? data.data[0].sport_type : null}
                    </td>
                  </tr>
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">League</td>
                    <td className="text-center p-1 py-3">
                      {data ? data.data[0].league : null}
                    </td>
                  </tr>
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">Link One</td>
                    <td className="text-center p-1 py-3">
                      <a
                        className="px-3 p-1 rounded bg-yellow-400 text-black cursor-pointer"
                        onClick={
                          data
                            ? data.data[0].link_one.length > 2
                              ? () => window.open(data.data[0].link_one)
                              : null
                            : null
                        }
                      >
                        {" "}
                        click to watch Now
                      </a>
                    </td>
                  </tr>
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">Link Two</td>
                    <td className="text-center p-1 py-3">
                      <a
                        className="px-3 p-1 rounded bg-yellow-400 text-black cursor-pointer"
                        onClick={
                          data
                            ? data.data[0].link_two.length > 2
                              ? () => window.open(data.data[0].link_two)
                              : null
                            : null
                        }
                      >
                        {" "}
                        click to watch Now
                      </a>
                    </td>
                  </tr>
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">Link Three</td>
                    <td className="text-center p-1 py-3">
                      <a
                        className="px-3 p-1 rounded bg-yellow-400 text-black cursor-pointer"
                        onClick={
                          data
                            ? data.data[0].link_three.length > 2
                              ? () => window.open(data.data[0].link_three)
                              : null
                            : null
                        }
                      >
                        {" "}
                        click to watch Now
                      </a>
                    </td>
                  </tr>
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">Link Four</td>
                    <td className="text-center p-1 py-3">
                      <a
                        className="px-3 p-1 rounded bg-yellow-400 text-black cursor-pointer"
                        onClick={
                          data
                            ? data.data[0].link_four.length > 2
                              ? () => window.open(data.data[0].link_four)
                              : null
                            : null
                        }
                      >
                        {" "}
                        click to watch Now
                      </a>
                    </td>
                  </tr>
                  <tr className=" border border-yellow-400">
                    <td className="text-center p-1 py-3">Link Five</td>
                    <td className="text-center p-1 py-3">
                      <a
                        className="px-3 p-1 rounded bg-yellow-400 text-black cursor-pointer"
                        onClick={
                          data
                            ? data.data[0].link_five.length > 2
                              ? () =>
                                  window.location.assign(data.data[0].link_five)
                              : null
                            : null
                        }
                      >
                        {" "}
                        click to watch Now
                      </a>
                    </td>
                  </tr>{" "}
                </tbody>
              </table>
            </div>

            <div className="w-full p-5   flex items-center justify-center text-base font-bold">
              {data && data.data[0].title}
            </div>
          </div>

          <div className="w-full  md:w-1/5">
            <div className="w-full h-full bg-yellow-400 flex items-center justify-center bold my-12 text-3xl">
              {/* google ads */}

              {/* <GoogleAds
                glass="w-full h-full md:h-60 pr-2 hidden md:inline-block"
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

export default Preview;
