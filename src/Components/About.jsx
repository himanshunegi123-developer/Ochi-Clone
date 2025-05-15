import React from "react";

function About() {
  return (
    <div className="w-full bg-zinc-900 rounded-tl-3xl rounded-tr-3xl text-white">
      <h1 className="font-['Neue_Montreal'] text-3xl sm:text-4xl md:text-5xl leading-relaxed sm:leading-[4vw] tracking-tight px-6 sm:px-[4.5rem] pt-[4rem] sm:pt-[5rem] pb-[3rem] sm:pb-[4rem] max-w-[1200px] mx-auto">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and
        hire great people.
      </h1>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-5 border-t border-[#a1b562] mt-[4rem] pt-5 px-6 sm:px-[4.5rem]">
        <div className="flex flex-col md:flex-row w-full gap-5">
          <div className="info-1 md:w-1/3">
            <h3 className="text-white p-4 sm:p-6 text-lg font-semibold">
              What you can expect:
            </h3>
          </div>
          <div className="info-2 md:w-1/3 text-white text-sm sm:text-base leading-relaxed">
            <h3>
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants.
              <br />
              <br />
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </h3>
          </div>
          <div className="info-3 md:w-1/3 px-4 sm:px-5 text-white flex flex-col gap-2 text-sm sm:text-base">
            <h2>S:</h2>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              Behance
            </a>
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-5 border-t border-[#a1b562] mt-[4rem] pt-5 px-6 sm:px-[4.5rem]">
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
            Our approach:
          </h1>
          <button className="flex gap-4 sm:gap-8 border border-zinc-100 items-center mt-6 sm:mt-7 px-4 sm:px-5 py-2 sm:py-3 bg-zinc-100 rounded-full text-zinc-900 font-semibold hover:bg-zinc-200 transition">
            Read more
            <div className="w-3 h-3 bg-zinc-900 rounded-full"></div>
          </button>
        </div>
        <img
          src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          alt="Our approach"
          className="md:w-1/2 rounded-3xl h-[50vh] sm:h-[70vh] object-cover w-full"
        />
      </div>
    </div>
  );
}

export default About;
