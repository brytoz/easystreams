import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import Top from "../../components/Top";
import axios from "axios";
import useAuth from "../../contexts/useAuth";
import { useQuery } from "react-query";

function Profile() {
  axios.defaults.withCredentials = true;
  const { user } = useAuth();

  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery(
    ["users"],
    async () => await axios.get(`${process.env.REACT_APP_DB}/login`)
  );

  if (isError) {
    navigate("/noaccess");
  }

  const [errorAdd, setErrorAdd] = useState(false);
  const [successAdd, setSuccessAdd] = useState(false);
  const [status, setStatus] = useState("");

  const [password, setPassword] = useState("");

 
  const resetAddress = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/update-password`, {
          username:user,
          password: password,
        })
        .then(async (result) => {
          if (result.status === 200) {
            setSuccessAdd(true);
            setStatus(result.data);
            setTimeout(() => {
              window.location.reload(true);
            }, 3000);
          } else {
            setErrorAdd(true);
            setStatus(result.data);
          }

          setTimeout(() => {
            setStatus("");
            setSuccessAdd(false);
            setErrorAdd(false);
          }, 5000);
        });
    } catch (err) {
      // console.log(err);
    }
  };
  return (
    <div className="w-full">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full"></div>
        <div className="flex-1 flex-wrap px-4">
          <Top />

          <div className=" flex-wrap  md:flex  justify-around">
           
            <form onSubmit={resetAddress} className="pt-8 md:pt-3">
              <div className="text-3xl font-bold w-full pb-4">Password</div>
              {errorAdd && (
                  <span className="text-center text-red-600 bold">
                    {status}
                  </span>
                )}
                {successAdd && (
                  <span className="text-center text-xl text-green-600 bold">
                    {status}
                  </span>
                )}
              
              <div className="mb-1 sm:mb-2">
              
                <label
                  htmlFor="address"
                  className="inline-block mb-1 font-medium"
                >
                  Change my password
                </label>
                <input
                  placeholder="***********"
                  required
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            
                />
              </div>

              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-opacity-75 text-black focus:shadow-outline focus:outline-none"
                >
               Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
