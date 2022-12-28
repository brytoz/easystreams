import React, { useState } from "react";
import axios from "axios";
import SideNav from "../../components/SideNav";
import Top from "../../components/Top";
import useAuth from "../../contexts/useAuth";

export const Priority = () => {
  axios.defaults.withCredentials = true;

  const { user } = useAuth();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const [id, setId] = useState("");

  const [priority, setPriority] = useState("");


  const handleFormUpload = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/update-priority`, {
          id,
          priority,
        })
        .then(async (result) => {
          if (result.status === 200) {
            setSuccess(true);
            setStatus(result.data);
            setTimeout(() => {
              window.location.reload(true);
            }, 3000);
          } else {
            setError(true);
            setStatus(result.data);
          }

          setTimeout(() => {
            setStatus("");
            setSuccess(false);
            setError(false);
          }, 5000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full "></div>
        <div className="flex-1 flex-wrap px-4">
          <Top />
          <div className=" flex-wrap  md:flex ">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full mt-12 py-3">
              <form onSubmit={handleFormUpload} className="pt-8 md:pt-3">
                <div className="text-3xl font-bold w-full pb-4">
                  Post Upcoming Livestream Link data (use ID)
                </div>
                {error && (
                  <span className="text-center text-red-600 bold">
                    {status}
                  </span>
                )}
                {success && (
                  <span className="text-center text-xl text-green-600 bold">
                    {status}
                  </span>
                )}

<div className="mb-1 sm:mb-2">
                  <label  className="inline-block mb-1 font-medium">
                    Post ID
                  </label>
                  <input
                    placeholder="Enter the post ID"
                    required
                    type="number"
                    onChange={(e) => setId(e.target.value)}
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  
                  />
                </div>

<div className="mb-1 sm:mb-2">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Select Priority
                    </label>
                    <select
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      value={priority}
                      onChange={(e) => {
                        setPriority(e.target.value);
                      }}
                    >
                      <option value="">Select Priority</option>
                      <option value="A">High</option>
                      <option value="B">Medium</option>
                      <option value="C">Low</option>
                    </select>
                  </div>
          
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black  transition duration-200 rounded shadow-md bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-opacity-75 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                  >
                    Update Priority
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
