import axios from "axios";
import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import Top from "../../components/Top";

function UpdateScores() {
  axios.defaults.withCredentials = true;

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const [id, setId] = useState("");
  const [scores, setScores] = useState("");

  const  handleScores = async (e) => {

    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/scores`, {
          id: id,
          scores: scores,
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
  } 

  return (
    <div className="w-full">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full "></div>
        <div className="flex-1 flex-wrap px-4">
          <Top />
          <div className=" flex-wrap  md:flex ">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full mt-12 py-3">
              <form onSubmit={handleScores} className="pt-8 md:pt-3">
                <div className="text-3xl font-bold w-full pb-4">
                 Update Fulltime Scores (use ID)
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
                    className="inline-block mb-1 font-medium"
                  >
                  Scores
                  </label>
                  <input
                    placeholder="e.g 2 - 0"
                    required
                    type="text"
                    onChange={(e) => setScores(e.target.value)}
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                     
                  />
                </div>
               
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black  transition duration-200 rounded shadow-md bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-opacity-75 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                  >
                    Update Scores
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default UpdateScores;
