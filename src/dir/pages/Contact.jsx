import React, { Fragment } from "react";
import { BiFootball } from "react-icons/bi";
import BottomNav from "../component/BottomNav";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function Contact() {
  return (
    <Fragment>
      <Navbar />

    <div className="  flex  justify-center items-center pb-8">
      <div className="flex-wrap justify-center items-center px-6 md:px-32 xl:px-64 space-y-12">
        <div className="  space-y-6 flex-wrap justify-center items-center ">
          <div className="mt-6 font-bold text-3xl flex items-center space-x-6 ">
            <BiFootball className="yellow" size={24} /> <h1>CONTACT US</h1>{" "}
            <BiFootball className="yellow" size={24} />
          </div>
          <div className="text-base space-y-6 leading-loose  flex-wrap justify-center items-center">
            <p>
              <div>
              Our support channels is avalable 24/7. For support and general
              enquiries please mail us @{" "}
              <a
                className="transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 cursor-pointer bg-yellow-400 rounded px-2 py-1 text-black font-bold"
                href="mailto:contact@easystreams.net"
              >
                contact@easystreams.net
              </a>
              </div>
              <div className="mt-6">
                For Advertisement and marketing enquiries, mail us @ {" "}
                <a
                  className="cursor-pointer bg-yellow-400 rounded px-2 py-1 text-black font-bold transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 "
                  href="mailto:marketing@easystreams.net"
                >
                  marketing@easystreams.net
                </a>
              </div>
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

export default Contact;
