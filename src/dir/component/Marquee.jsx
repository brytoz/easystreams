import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import moment from "moment-timezone";
import { FOOTBALL, BASKETBALL } from "./Img";
import { PulseNotification } from "./PulseNotification";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

export default function Marquee() {
  axios.defaults.withCredentials = true;

  const [first, setfirst] = useState(true);
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
  };

  return (
    <ScrollMenu>
      <div className="   h-full overflow-x-scroll scroll  whitespace scroll-smooth  flex space-x-4 p-3 ">
        {data?.data.slice(0, 5).map((datas) => (
          <div
            key={datas.id}
            className="relative  text-white w-[15rem] md:w-[25rem]  h-40 md:h-48  rounded shadow-md   text-sm md:text-xl     overflow-hidden"
          >
            <a href={`${process.env.REACT_APP_LINK}match-details/${datas.id}/${datas.ref}`}>
            <div
              className={
                datas.sport_type === "Football"
                  ? "bg-football absolute inset-0 w-full h-full rounded"
                  : " bg-basketball absolute inset-0 w-full h-full rounded"
              }
            /> 
            <div className="absolute cursor-pointer inset-0 w-full h-full pt-3 rounded space-y-6 md:space-y-8  ">
              <div className="flex text-sm md:text-base justify-center font-bold items-center uppercase ">
                {datas.league}
              </div>
              <div className="w-full flex  justify-between  items-center text-xs md:text-sm  capitalize px-2">
                <div className="w-[45%] flex items-center   justify-center  text-center">
                  <img
                    alt="team 2"
                    className="h-10 w-10 rounded-full text-xs"
                    src={`https://server.easystreams.net/${datas.home_img}`}
                  />
                  <span className="pl-1" /> {datas.home_team}
                </div>
                <div className="w-[10%] lowercase px-1 mx-2 py-.5 rounded bg-[#182538] text-[#f3e012] text-center">
                  vs
                </div>
                <div className="w-[45%]  flex items-center   justify-center text-center">
                  {datas.away_team} <span className="pl-1" />
                  <img
                    alt="team 2"
                    className="h-10 w-10 rounded-full text-xs"
                    src={`https://server.easystreams.net/${datas.away_img}`}
                  />
                </div>
              </div>

              <div className="text-xs flex justify-center items-center absolute bottom-2 left-0 text-center w-full">
                {datas ? (
                  dDate === datas.match_day ? (
                    datas.match_time <= dtime ? (
                      datas.match_time >= dtimeAgo ? (
                        ""
                      ) : dtimeAgo > datas.match_time ? (
                        <div className="text-xl">Finished</div>
                      ) : (
                        `${datas.match_day} || ${datas.match_time}`
                      )
                    ) : (
                      `${datas.match_day} || ${datas.match_time}`
                    )
                  ) : (
                    `${datas.match_day} || ${datas.match_time}`
                  )
                ) : null}
                {datas ? (
                  dDate === datas.match_day ? (
                    datas.match_time <= dtime ? (
                      datas.match_time >= dtimeAgo ? (
                        <PulseNotification />
                      ) : dtimeAgo > datas.match_time ? (
                        ""
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )
                ) : null}
              </div>
            </div>
            </a>  </div>
        ))}
      </div>
    </ScrollMenu>
  );
}
