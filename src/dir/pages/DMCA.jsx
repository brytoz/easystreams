import React, { Fragment } from "react";
import { BiFootball } from "react-icons/bi";
import BottomNav from "../component/BottomNav";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import SideBar from "../component/SideBar";

function DMCA() {
  return (
    <Fragment>
      <Navbar />

      <div className="  flex  justify-center items-center pb-8">
        <div className="flex-wrap justify-center items-center px-6 md:px-32 xl:px-64 space-y-12">
          <div className="  space-y-6 flex-wrap justify-center items-center ">
            <div className="mt-6 font-bold text-3xl flex items-center space-x-6 ">
              <BiFootball className="yellow" size={24} /> <h1>DMCA</h1>{" "}
              <BiFootball className="yellow" size={24} />
            </div>
            <div className="text-base space-y-6 leading-loose  flex-wrap justify-center items-center">
              <p>
                This Website contains only the favorite channels and 3rd party
                sites are not affiliated in any way responsible for their
                content that are freely available to all Internet. All content
                is a copyright of their respective owners We are on the side of
                the Iframe link and tick the Embeded code. We are not their
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BottomNav />
    </Fragment>
  );
}

export default DMCA;
