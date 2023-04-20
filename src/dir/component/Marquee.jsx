import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useQuery } from "react-query";
import moment from "moment-timezone";
import { DarkModeContext } from "../contexts/darkModeContext";

export default function Marquee() {
  axios.defaults.withCredentials = true;
  const { dispatch, darkMode } = useContext(DarkModeContext);

  const { data, isLoading } = useQuery(
    ["match-details-featured"],
    async () => await axios.get(`${process.env.REACT_APP_ADMIN}/post-new`)
  );

  const dtime = moment().tz("Africa/Lagos").format("HH:mm");
  const dtimeAgo = moment()
    .tz("Africa/Lagos")
    .subtract(2, "hours")
    .format("HH:mm");
  const dDate = moment().tz("Africa/Lagos").format("YYYY-MM-DD");

  const settings = {
    infinite: true,
    speed: 10000,
    autoplaySpeed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    useCSS: true,
    cssEase: "linear",
    className:
      "  overflow-x-hidden w-full flex justify-around  items-center justify-items-stretch    divide-x-2 relative  ",
  };

 
  return (
    <div className="w-full flex  py-4   relative  ">
      <Slider {...settings}>
        <div className="w-full text-sm md:text-xl flex justify-center font-bold items-center uppercase">
          Featured Matches
        </div>

        {data?.data.slice(0,5).map((datas) => (
          <div key={datas.id} className="text-[10px] md:text-xl w-full  flex justify-center items-center">
            {dDate === datas.match_day ? (
                              datas.match_time <= dtime ? (
                                datas.match_time >= dtimeAgo ? (
                                    <span className=" inline-flex items-center h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-600 animate-pulse pt-2 md:pt-0 mr-2" />
                                ) : dtimeAgo > datas.match_time ? (
                                  ""
                                ) : (
                                  ''
                                )
                              ) : (
                                ''
                              )
                            ) : (
                              ''
                            )}
            
            <span className="  capitalize">{datas.home_team}</span>
            <span className=" text-yellow-500 font-extrabold text-sm px-2">vs</span>
            <span className="  capitalize">{datas.away_team}</span>
            <span className="  capitalize pl-3">{datas.match_time}</span>
          </div>
        ))}

        
 
      </Slider>
    </div>
  );
}
