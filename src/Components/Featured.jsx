import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
      <div className="w-full py-10">
        <div className="w-full px-4 md:px-15 border-b-[1px] pb-20 border-zinc-700">
          <h1 className='text-4xl md:text-7xl font-["Neue_Montreal"] tracking-tight'>
            Featured Projects
          </h1>
        </div>

        <div className="px-4 md:px-16">
          {/* Reusable Cards Row */}
          {[
            [
              {
                key: "card1",
                title: "SALIENCE LABS",
                hoverText: "FYDE",
                hoverColor: "#9e6e2b",
                imgSrc: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
              },
              {
                key: "card2",
                title: "CARDBOARD SPACESHIP",
                hoverText: "VISE",
                hoverColor: "#CDEA68",
                imgSrc: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
              },
            ],
            [
              {
                key: "card1",
                title: "AH2 AND MATT HORN",
                hoverText: "AH2_AND_MATT_HORN",
                hoverColor: "#9e6e2b",
                imgSrc: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
              },
              {
                key: "card2",
                title: "FYDE",
                hoverText: "VISE",
                hoverColor: "#CDEA68",
                imgSrc: "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
              },
            ],
            [
              {
                key: "card1",
                title: "Vise",
                hoverText: "VISE",
                hoverColor: "#ceea68",
                imgSrc: "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
              },
              {
                key: "card2",
                title: "All things go",
                hoverText: "ALL_THINGS_GO",
                hoverColor: "#ceea68",
                imgSrc: "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
              },
            ],
            [
              {
                key: "card1",
                title: "TRAWA",
                hoverText: "TRAWA",
                hoverColor: "#ceea68",
                imgSrc: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
              },
              {
                key: "card2",
                title: "BLACKBOOK",
                hoverText: "BLACKBOOK",
                hoverColor: "#ceea68",
                imgSrc: "https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg",
              },
            ],
          ].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="cards w-full flex flex-col md:flex-row gap-7 mt-10"
            >
              {row.map(({ key, title, hoverText, hoverColor, imgSrc }) => (
                <motion.div
                  key={key}
                  onMouseEnter={() => setHoveredCard(key)}
                  onMouseLeave={() => setHoveredCard(null)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative rounded-xl w-full md:w-1/2 h-[60vh] md:h-[85vh]"
                >
                  <h1 className="pb-5 md:pb-0">{title}</h1>

                  {hoveredCard === key && (
                    <h1
                      className="absolute flex left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter"
                      style={{
                        color: hoverColor,
                        fontSize: window.innerWidth < 768 ? "4rem" : "9rem",
                      }}
                    >
                      {hoverText.split("").map((item, index) => (
                        <span key={index} className="inline-block">
                          {item}
                        </span>
                      ))}
                    </h1>
                  )}

                  <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={imgSrc}
                      alt={title}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
