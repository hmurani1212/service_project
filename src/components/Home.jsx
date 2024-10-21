import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import pic3 from "../image/pic3.png"
const Home = () => {
  const [text] = useTypewriter({
    words: ['Your Success, Our Commitment – Welcome to RAAquatech'],
    loop: false,
    typeSpeed: 75,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div>
      <section 
      >
        <section className="pt-20 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-20 2xl:pt-16" id="Home">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
              <h2 className="text-3xl font-bold leading-tight text-white dark:text-white  sm:text-sm lg:text-3xl sm:h-28 md:h-20" style={{ color: "#D3D3D3" }}>
                  {text} <Cursor />
                </h2>
                <p className="max-w-lg mt-3 text-base leading-relaxed  font-bold md:mt-8" style={{ color: "#D3D3D3" }}>
                  At RAAQUATECH, we specialize in delivering tailored, innovative solutions that drive business success. With a commitment to quality and a focus on customer satisfaction, we help companies achieve their goals through cutting-edge technology and expert services.
                </p>

                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  </span>
                  <button
                    type="button"
                    class="text-white border border-2 border-indigo-600 from-cyan-400 via-cyan-500 to-cyan-600 bg-transparent hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-colors duration-300"
                  >
                    Get in Touch
                  </button>
                </p>
              </div>
              <div className="relative animate-slide-in-right mt-44">
                <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                  src={pic3} alt="" />
              </div>
            </div>
          </div>
        </section>
      </section>
      
    </div>
  );
};

export default Home;
