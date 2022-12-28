import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

function Error() {
  return (
    <Fragment>
      <div
        id="error"
        className="flex-wrap  h-screen flex justify-center items-center text-white bg-yellow-100"
      >
        <div className="  justify-center font-extrabold text-center text-6xl">
          404 error!!
          <div className="block text-xl">
            The page you're looking for doesnt appear to exist
          </div>
          <div className="pt-24 block text-xl ">
            <Link to="/">
              <span className="bg-yellow-400 rounded px-3 py-2 text-black  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-10">Go Home</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Error;
