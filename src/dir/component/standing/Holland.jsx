import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";
import * as Image from "../Img";

const Germany = () => {
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery(
    ["holland"],
    async () => await axios.get(`${process.env.REACT_APP_TABLE}/holland-table`)
  );

 
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="text-white h-full bg-gray-800">
      <div className="flex justify-center items-center pt-4">
        <div>
          <img
            src={Image.holland}
            className="rounded-xl w-20 md:w-24"
            alt="holland table"
          />
        </div>
        <div>
          <h1 className="  text-xl md:text-4xl   font-extrabold pt-8 px-2 text-center w-full">
            Holland Eredivisie League Table
          </h1>
        </div>
      </div>
      <div className="py-8">
        <div className="max-w-screen-xl px-2 mx-auto">
          <table className="w-full text-xs md:text-base">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left p-1 pb-2">&nbsp;</th>
                <th className="text-left p-1 pb-2">
                  <abbr title="Teams in Competition">TEAM</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Games Played">PLD</abbr>
                </th>
                <th className="text-center p-1 pb-2 hidden lg:table-cell">
                  <abbr title="Games Won">W</abbr>
                </th>
                <th className="text-center p-1 pb-2 hidden lg:table-cell">
                  <abbr title="Games Drawn">D</abbr>
                </th>
                <th className="text-center p-1 pb-2 hidden lg:table-cell">
                  <abbr title="Games Lost">L</abbr>
                </th>
                <th className="text-center p-1 pb-2 hidden lg:table-cell">
                  <abbr title="Goals For">F</abbr>
                </th>
                <th className="text-center p-1 pb-2 hidden lg:table-cell">
                  <abbr title="Goals Against">A</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Goal Difference">GD</abbr>
                </th>
                <th className="text-center p-1 pb-2">
                  <abbr title="Points">PTS</abbr>
                </th>
              </tr>
            </thead>

            {isError ? <div className="w-full p-4 text-center"> Please check your internet connection.</div> : null}

            {data &&
              data.data.map((datas) => (
                <tbody key={datas.id}>
                  <tr className="bg-gray-900 bg-opacity-30">
                    <td className="text-left p-1">{datas.position}</td>
                    <td className="text-left p-1">{datas.club}</td>
                    <td className="text-center p-1 ">{datas.played}</td>
                    <td className="text-center p-1 hidden lg:table-cell">
                      {datas.won}
                    </td>
                    <td className="text-center p-1 hidden lg:table-cell">
                      {datas.drawn}
                    </td>
                    <td className="text-center p-1 hidden lg:table-cell">
                      {datas.lost}
                    </td>
                    <td className="text-center p-1  hidden lg:table-cell ">
                      {datas.goalsFor}
                    </td>
                    <td className="text-center p-1 hidden lg:table-cell">
                      {datas.goalsAgainst}
                    </td>
                    <td className="text-center p-1">{datas.goalDifference}</td>
                    <td className="text-center p-1">{datas.points}</td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Germany;
