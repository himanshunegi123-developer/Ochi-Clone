import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      data-scroll-section
      className="w-full py-10 bg-[#004D43] rounded-t-3xl"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <motion.h1
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className='
              text-[80px] 
              sm:text-[150px] 
              md:text-[250px] 
              lg:text-[437px] 
              leading-none 
              font-semibold 
              uppercase 
              font-["Founders_Grotesk_X-Condensed"] 
              pr-10 sm:pr-20
            '
          >
            we are ochi
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
