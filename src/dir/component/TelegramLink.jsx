import React from "react";
import { FaTelegram} from "react-icons/fa";
import {motion} from 'framer-motion'

export const TelegramLink = () => {
  return (
    <div className="w-full flex-wrap  h-48 mb-4 bg-yellow-500 flex items-center justify-center bold my-12 text-3xl text-[#182538] overflow-hidden">
        <motion.div  initial={{ x: -100, opacity: 0, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              whileInView={{ x:1, opacity:1 }}
              whileHover={{ scale: 1.2, z:10 }} 
              exit={{ x:  -100, opacity: 0 }}
              whileTap={{ scale: 0.8 }} 
              className="w-full md:w-1/2 flex flex-wrap items-center  justify-center text-xl md:text-3xl">
          <a
            href="https://t.me/easystreamsport"
            
          >
            {" "}
            <FaTelegram className="  mr-2" size={72} />
          </a>{" "}
          <div className="block">
            {" "}
            <a
              href="https://t.me/easystreamsport"
              className="bg-[#182538] px-2 py-1 rounded yellow"
            >
              Subscribe to our telegram channel
            </a>
          </div>
        </motion.div>
        <div className="w-full md:pt-4 md:mt-0 md:w-1/2 flex  justify-center  md:justify-start text-xl md:text-3xl pb-3 md:px-3 px-2">
          Join our telegram page to get the latest sports updates.
        </div>
      </div>
  )
}
