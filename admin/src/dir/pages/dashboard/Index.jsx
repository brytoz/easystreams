import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import useAuth from "../../contexts/useAuth";
import Top from "../../components/Top";
import axios from "axios";
import { useQuery } from "react-query";

export default function Index() {
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
  
  useEffect(() => {
    async function getUsers() {
      try {
        await axios
          .get(`${process.env.REACT_APP_DB}/users`)
          .then((result) => {

            setInfo(result.data)
          });
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="w-full">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full "></div>
        <div className="flex-1 flex-wrap px-4">
          <Top />
          <div className=" flex-wrap  md:flex ">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full mt-12 py-3">
              To make any actions, use the post ID. Go to the action pane in the left and select an action to make Input <br /><br />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
