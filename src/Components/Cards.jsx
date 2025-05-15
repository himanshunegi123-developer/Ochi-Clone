import React from 'react'

function Cards() {
  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 bg-zinc-900 gap-5 py-10'>
      {/* Left big card */}
      <div className='cardContainer h-[50vh] md:h-[60vh] w-full md:w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
          <img
            className='max-w-[140px] md:max-w-[180px] object-contain'
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Logo 1"
          />
          <button className='absolute px-5 py-2 rounded-full border-2 left-5 md:left-10 bottom-5 md:bottom-10 border-yellow-300 text-yellow-300 text-xs md:text-sm'>
            &copy;2019-2022
          </button>
        </div>
      </div>

      {/* Right smaller cards */}
      <div className='cardContainer flex flex-col md:flex-row gap-5 h-[50vh] md:h-[60vh] w-full md:w-1/2'>
        <div className='card relative rounded-xl w-full md:w-1/2 h-1/2 md:h-full bg-[#6fc2b7] flex items-center justify-center'>
          <img
            className='max-w-[120px] md:max-w-[150px] object-contain'
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Logo 2"
          />
          <button className='absolute px-5 py-2 rounded-full border-2 left-5 md:left-10 bottom-5 md:bottom-10 border-black text-black text-xs md:text-sm whitespace-nowrap'>
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className='card relative rounded-xl w-full md:w-1/2 h-1/2 md:h-full bg-[#6fc2b7] flex items-center justify-center'>
          <img
            className='max-w-[120px] md:max-w-[150px] object-contain'
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Logo 3"
          />
          <button className='absolute px-5 py-2 rounded-full border-2 left-5 md:left-10 bottom-5 md:bottom-10 border-black text-black text-xs md:text-sm whitespace-nowrap'>
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
