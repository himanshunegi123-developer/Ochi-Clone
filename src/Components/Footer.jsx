import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
  viewport: { once: true },
});

function Footer() {
  return (
    <motion.div
      {...fadeUp(0)}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-screen bg-zinc-900 p-6 lg:p-15 font-['Founders_Grotesk_X-Condensed'] text-white"
    >
      {/* Left side */}
      <div className="lg:w-1/2 flex flex-col justify-between">
        <motion.div {...fadeUp(0.1)} className="heading">
          <h1 className="text-[7vw] lg:text-[4rem] tracking-wide font-semibold uppercase leading-none mb-0.5">
            Eye-
          </h1>
          <h1 className="text-[7vw] lg:text-[4rem] tracking-wide font-semibold uppercase leading-none mb-0.5">
            Opening
          </h1>
        </motion.div>

        <motion.svg
          {...fadeUp(0.2)}
          width="72"
          height="30"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-6"
        >
          <path d="M9.8393 10.2032C4.22951 10.3257..." fill="currentColor" />
          {/* Add remaining paths here if needed */}
        </motion.svg>
      </div>

      {/* Right side */}
      <div className="lg:w-1/2">
        <motion.h1
          {...fadeUp(0.2)}
          className="text-[6vw] lg:text-5xl tracking-tighter font-semibold uppercase leading-none mb-8"
        >
          Presentations
        </motion.h1>

        <motion.div {...fadeUp(0.3)} className="flex flex-col lg:flex-row gap-12">
          {/* S Block */}
          <div className="flex flex-col gap-2">
            <h2 className="mb-5">S:</h2>
            {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((item, index) => (
              <motion.a
                {...fadeUp(0.3 + index * 0.05)}
                href="#"
                key={item}
                className="block text-xl font-light hover:underline"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* L Block */}
          <div className="flex flex-col gap-2">
            <h2 className="mb-5">L:</h2>
            {['202-1965 W 4th Ave', 'Vancouver, Canada', '30 Chukarina St', 'Lviv, Ukraine'].map((loc, index) => (
              <motion.a
                {...fadeUp(0.35 + index * 0.05)}
                href="#"
                key={loc}
                className="block hover:underline"
              >
                {loc}
              </motion.a>
            ))}
          </div>

          {/* E Block */}
          <motion.div {...fadeUp(0.4)} className="flex flex-col gap-2">
            <h2 className="mb-5">E:</h2>
            <p>hello@ochi.design</p>
          </motion.div>

          {/* M Block */}
          <div className="flex flex-col gap-2">
            <h2 className="mb-5">M:</h2>
            {['Home', 'Services', 'Our Work', 'About Us', 'Insights', 'Contact Us'].map((item, index) => (
              <motion.a
                {...fadeUp(0.45 + index * 0.05)}
                href="#"
                key={item}
                className="block hover:underline"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Footer;
