import React, { Fragment } from "react";
import { BiFootball } from "react-icons/bi";
import BottomNav from "../component/BottomNav";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function Disclaimer() {
  return (
    <Fragment>
      <Navbar />

    <div className="  flex  justify-center items-center pb-8">
      <div className="flex-wrap justify-center items-center px-6 md:px-32 xl:px-64 space-y-12">
        <div className="  space-y-6 flex-wrap justify-center items-center ">
          <div className="mt-6 font-bold text-3xl flex items-center space-x-6 ">
            <BiFootball className="yellow" size={24} /> <h1>DISCLAIMER</h1>{" "}
            <BiFootball className="yellow" size={24} />
          </div>
          <div className="text-base space-y-6 leading-loose  flex-wrap justify-center items-center">
            <p>
              All the information on this website{" "}
              <a
                className="cursor-pointer bg-yellow-400 rounded px-2 py-1 text-black font-bold"
                href="https://easystreams.net"
              >
                https://easystreams.net{" "}
              </a>{" "}
              is published in good faith and for general information purpose
              only. EASYSTREAMS does not make any warranties about the
              completeness, reliability and accuracy of this information. Any
              action you take upon the information you find on this website, is
              strictly at your own risk. EASYSTREAMS will not be liable for any
              losses and/or damages in connection with the use of our website.
              From our website, you can visit other websites by following
              hyperlinks to such external sites. While we strive to provide only
              quality links to useful and ethical websites, we have no control
              over the content and nature of these sites. These links to other
              websites do not imply a recommendation for all the content found
              on these sites. Site owners and content may change without notice
              and may occur before we have the opportunity to remove a link
              which may have gone ‘bad’. Please be also aware that when you
              leave our website, other sites may have different privacy policies
              and terms which are beyond our control. Please be sure to check
              the Privacy Policies of these sites as well as their “Terms of
              Service” before engaging in any business or uploading any
              information.
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

export default Disclaimer;
