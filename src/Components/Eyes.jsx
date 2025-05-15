import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-x-auto bg-zinc-900">
      <div
        data-scroll
        data-scroll-speed="-0.6"
        className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          {/* Left eye */}
          <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <h1 className="flex items-center justify-center mt-14 text-white">PLAY</h1>
              <div
                style={{ transform: `rotate(${rotate - 180}deg)`, transformOrigin: 'center' }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Right eye */}
          <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <h1 className="flex items-center justify-center mt-14 text-white">PLAY</h1>
              <div
                style={{ transform: `rotate(${rotate - 180}deg)`, transformOrigin: 'center' }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
