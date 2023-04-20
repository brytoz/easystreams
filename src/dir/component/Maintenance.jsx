import React, { useState } from "react";
import * as image from "./Img";


export const Maintenance = () => {
  const [soon, setSoon] = useState(false);

  return (
    <div className="w-full h-screen flex z-99 fixed top-0 left-0 right-0 bg-white overflow-y-hidden ">
      <div className="w-full flex text-center items-center justify-center text-xl font-bold bg-yellow-400 p-12">
        <div className="text-center flex-wrap">
          <div className="h-12 overflow-hidden flex items-center justify-center">
            <img alt="easystreams" className="w-40" src={image.One} />
          </div>
          <div>
            {" "}
            <h1 className="text-2xl md:text-4xl pb-6">Website Maintenance</h1>
            <span className="capitalize pt-5 pb-2 mt-8"> we are currently undergoing service maintenance. Please be patient.</span>
          </div>
          <button
            className="rounded mt-8 bg-[#182538] text-white px-4 py-2 text-base transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-10"
             
          >
            We'll be right back.
          </button>
        </div>
      </div>
    </div>
  );
};

 
