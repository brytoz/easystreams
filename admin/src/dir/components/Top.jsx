import React from "react";
import { FaUser } from "react-icons/fa";
import useAuth from "../contexts/useAuth";

function Top() {
  const { user } = useAuth();
 
  return (
    <div className="w-full p-4  flex justify-between items-center  space-x-4 shadow-lg">
      <div className="font-bold text-xs text-gray-600">
        <span className="hidden md:inline-block">EasyStreams</span> 
      </div>
      <div className="flex items-center space-x-2">
        <div className="capitalize">Hello {user}</div>
        <div>
          <FaUser className="text-gray-900" />
        </div>
      </div>
    </div>
  );
}

export default Top;
