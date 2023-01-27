import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav";
import Top from "../../components/Top";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import useAuth from "../../contexts/useAuth";
import { BsFillTrashFill } from "react-icons/bs";

function AllPost() {
  axios.defaults.withCredentials = true;
  const { user } = useAuth();

  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery(
    ["users"],
    async () => await axios.get(`${process.env.REACT_APP_DB}/login`)
  );

  // users
  if (isError) {
    navigate("/noaccess");
  }

  const [info, setInfo] = useState([]);
  const [status, setStatus] = useState("");

  let objectDate = new Date();
  let day = objectDate.getDate();
  let month = objectDate.getMonth() + 1;
  let year = objectDate.getFullYear();
  let fulldate = year + "-" + month + "-" + day;

  let hours = objectDate.getHours();
  let minutes = objectDate.getMinutes();
  let times = hours + ":" + minutes;

  
  let boti = fulldate + ":" + times;

  useEffect(() => {
    async function getUsers() {
      try {
        await axios.get(`${process.env.REACT_APP_DB}/post`).then((result) => {
          setInfo(result.data);
          const sef =
            result.data[0].match_day + ":" + result.data[0].match_time;
          
        });
      } catch (err) {
        // console.log(err);
      }
    }
    getUsers();
  }, []);

  async function deletePost(id) {
    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/delete-post`, {
          id: id,
        })
        .then(async (result) => {
          setStatus(result.data);
          setTimeout(() => {
            window.location.reload(true);
          }, 3000);
           
        });
    } catch (err) {
      // console.log(err.message);
    }
  }

  return (
    <div className="w-full">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full "></div>
        <div className="flex-1 flex-wrap px-4">
          <Top />
          <div className=" flex-wrap  md:flex ">
            <div className="w-full py-4 font-bold text-green-600 ">
              {status}
            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full mt-12">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Link
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Home
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Away
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Kickoff
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Priority
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {info &&
                    info.map((datas) => (
                      <tr
                        key={datas.id}
                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      >
                        <td className="py-4 px-6">{datas.id}</td>
                        <td className="py-4 px-6">{datas.ref}</td>
                        <td className="py-4 px-6">{datas.home_team}</td>
                        <td className="py-4 px-6">{datas.away_team}</td>
                        <td className="py-4 px-6">
                          {datas.match_day} {datas.match_time}
                        </td>
                        <td className="py-4 px-6">
                          {datas.priority === "A"
                            ? "High"
                            : datas.priority === "B"
                            ? "Medium"
                            : datas.priority === "C"
                            ? "Low"
                            : "Very Low"}
                        </td>
                        <td className="py-4 px-6">
                          <span
                            title="Delete Post"
                            onClick={() => deletePost(datas.id)}
                          >
                            <BsFillTrashFill
                              className="cursor-pointer text-red-600"
                              size={26}
                            />
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPost;
