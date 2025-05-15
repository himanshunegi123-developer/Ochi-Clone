import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    // Changed h-screen to min-h-screen for flexible height
    <div data-scroll data-scroll-speed="-.3" className="w-full min-h-screen pt-1 flex flex-col justify-center">
      <div className="text-structure mt-10 sm:mt-20 px-6 sm:px-10 md:px-20">
        {["We create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker mb-2">
              <div className="w-fit flex items-end overflow-hidden flex-wrap">
                {index === 1 && (
                  <motion.img
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    initial={{ width: 0 }}
                    animate={{ width: "12vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1.5,
                    }}
                    className="mr-3 mb-2 rounded-md w-[12vw] h-auto max-w-[180px] sm:w-[30vw] sm:max-w-[220px]"
                    alt="Eye Opening Presentation"
                  />
                )}
                <h1 className="uppercase text-[10vw] sm:text-[8vw] md:text-[6.5vw] leading-tight tracking-tighter font-bold font-['Founders_Grotesk']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-2 border-zinc-800 mt-8 sm:mt-16 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 py-5 px-6 sm:px-10 md:px-20">
        <div className="space-y-2 sm:space-y-0 sm:space-x-10 sm:flex sm:items-center">
          <p className="text-sm sm:text-md font-light tracking-tight leading-none">
            For public and private companies
          </p>
          <p className="text-sm sm:text-md font-light tracking-tight leading-none">
            From the first pitch to IPO
          </p>
        </div>
        <div className="start flex items-center gap-4">
          <div className="px-4 py-2 border border-zinc-500 rounded-full font-light text-sm sm:text-md">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center border border-zinc-500 rounded-full">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
