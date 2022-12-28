import React from "react";
import { Link } from "react-router-dom";

function Session() {
  return (<div 
    className="flex-wrap  h-screen flex justify-center items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-opacity-75 text-white"
  >
    <div className="  justify-center font-extrabold text-center   text-7xl bold">
    440 Error
      <div className="block text-xl"> Your session has expired!
        .</div>
      <div className='font-normal text-base mt-4'> Login to continue</div>
        <span
          className="mt-24  inline-flex items-center justify-center px-6 py-2 mb-4 border border-transparent text-2xl font-medium rounded-full text-white bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900   hover:bg-purple-500 shadow-xl cursor-pointer focus:outline-none focus:shadow-outline shadow-md shadow-purple-900/50  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 bold"
        >
          <Link to="/">Login</Link>
        </span>
    </div>
  </div>);
}

export default Session;
