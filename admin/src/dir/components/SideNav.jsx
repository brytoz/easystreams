import React from "react";
import { links } from "./links";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../contexts/useAuth";
import axios from "axios";
import { BiLogOut } from "react-icons/bi";

function SideNav() {
  axios.defaults.withCredentials = true;

  const { user } = useAuth();

  const navigate = useNavigate();
  const clearStorage = () => {
    axios.get(`${process.env.REACT_APP_DB}/logout`).then((data) => {
      localStorage.clear();
      navigate("/");
    });
  };

  return (
    <nav className="hidden text-yellow-500 md:block w-60 h-full fixed bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-r-xl z-20">
      <div className="p-3 flex-wrap w-full">
        {links.map((data) => (
          <Link key={data.id} to={data.ref}>
            <div className="w-full cursor-pointer py-3 border-b border-gray-300/25 flex justify-between items-center  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
              {data.title} {data.icon}
            </div>
          </Link>
        ))}
        <div
          onClick={clearStorage}
          className="flex justify-between space-x-4 border-b border-gray-100 py-3 opacity-75 cursor-pointer items-center transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110"
        >
          Logout <BiLogOut size={25} />
        </div>

         
      </div>
    </nav>
  );
}

export default SideNav;
