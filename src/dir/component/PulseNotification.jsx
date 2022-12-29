import React from "react";

export const PulseNotification = () => {
  return (
    <div className="flex space-x-1 text-xl items-center">

  <div className=" h-3 w-3 rounded-full bg-red-600 animate-pulse" />
  <div>Live</div>
  </div>
 );
};
