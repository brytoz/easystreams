import React, { Fragment, useContext, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";

import * as Img from "../component/Img";
import { DarkModeContext } from "../contexts/darkModeContext";
import SideBar from "./SideBar";

function Navbar() {
  const { dispatch, darkMode } = useContext(DarkModeContext);

  const [sidebar, setSidebar] = useState(false);

  const checkNav = () => {
    setSidebar(!sidebar)
  };
  return (
    <Fragment>
      {sidebar ? <SideBar close={checkNav} /> : null}

    <div className="w-full flex items-center bg-[#182538] shadow-md shadow-black h-16 overflow-hidden">
      <div className="w-full  flex justify-between items-center px-3">
        <div onClick={checkNav} className="hidden md:block cursor-pointer">
          <AiOutlineMenuUnfold size={28} className="yellow" />
        </div>
        <div className="md:hidden">
          {/* <Link to="/"> */}
          <a href="https://easystreams.net" >
          <img
            alt="Logo Image"
            className="h-12  md:h-12 "
            src={Img.Six}
          />
          </a>
          {/* </Link> */}
        </div>
        <div className="hidden md:block">
          <a href="https://easystreams.net" >
            <img alt="Logo Image" className="h-52" src={Img.Two} />
          </a>
        </div>
        <div title="toggle light/darkmode" className="cursor-pointer">
         {darkMode ? <BsSunFill onClick={() => dispatch({ type: "TOGGLE" })} size={28} className="yellow"/> : <BsFillMoonStarsFill onClick={() => dispatch({ type: "TOGGLE" })} size={28} className="text-gray-200"/>}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Navbar;
