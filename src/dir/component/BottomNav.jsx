import React, { Fragment, useState } from "react";
import * as Img from "./Img";
import { VscTable } from "react-icons/vsc";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function BottomNav() {
  const [sidebar, setSidebar] = useState(false);

  const checkNav = () => {
    setSidebar(!sidebar)
  };
  return (
    <Fragment>
      {sidebar ? <SideBar close={checkNav} /> : null}
      <div className="  md:hidden fixed bottom-0 left-0 w-full h-auto  bg-[#182538] shadow-md shadow-black">
        <div className="z-90  flex items-center justify-between px-3 text-xs ">
          <div className="cursor-pointer flex-wrap items-center  -space-y-2  pb-2 transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            <div className="h-1/3 flex justify-center">
              <a href="https://Easystreams.net/">
                <img src={Img.Six} className="w-12" alt="Logo Image" />
              </a>
            </div>
            <div className="text-[#f3e012] text-center">Home </div>
          </div>

          <Link to='/league-standing' >
          <div className="cursor-pointer flex-wrap items-center space-y-1 text-center transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            <div className="text-center flex justify-center">
              <VscTable
                size={26}
                className="text-[#f3e012]  shadow-lg shadow-black"
              />
            </div>
            <div className="flex items-center text-center text-[#f3e012]">
              League Standing
            </div>
          </div>
          </Link>

          <div
            onClick={checkNav}
            className="cursor-pointer flex-wrap items-center space-y-1 transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110"
          >
            <div className="text-center flex justify-center">
              <HiMenuAlt1
                size={26}
                className="text-[#f3e012] shadow-lg shadow-black"
              />
            </div>
            <div className="w-full text-[#f3e012] text-center">Menu</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BottomNav;
