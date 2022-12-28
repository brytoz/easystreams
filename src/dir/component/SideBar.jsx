import React, { Fragment } from "react";
import * as Img from "./Img";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import { sidelinks } from "./sidelinks";
import { Link } from "react-router-dom";

const SideBar = ({ close }) => {
  return (
    <Fragment>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 1 }}
          transition={{ delay: 0.3 }}
          whileInView={{ opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          style={{zIndex:100}}
          className=" z-99 w-full h-full bg-yellow-300/75 fixed bottom-0 top-0 left-0"
        >
          <div onClick={close} className="text-[#182538] p-3 cursor-pointer">
            <AiFillCloseCircle size={36} className="" />
            <h6>Close</h6>
          </div>

          <div className="absolute top-0 right-0 w-[80%] md:w-[40%] lg:w-[35%] bg-[#182538]  h-full">
            <div className="flex-wrap">
              <div className=" h-16  bg-green- 400 flex items-center overflow-hidden">
                <img src={Img.Two} className="h-48" alt="Easystreams" />
              </div>

              <div className="flex-wrap">
                {sidelinks.map((data) => (
                  <Link to={data.ref} key={data.id}>
                    {/* <a href={data.page} key={data.id}> */}
                    <div className="w-full cursor-pointer py-3 border-b border-gray-300/25 flex justify-start pl-3 text-white text-sm   ">
                      {data.title}
                    </div>
                    {/* </a> */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};

export default SideBar;
