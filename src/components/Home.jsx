import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import imag2 from "../image/imag2.png";
// import imag3 from "../image/imag1.png";
const Home = () => {
  const [text] = useTypewriter({
    words: ['Hey 👋 I am Jenny Carter'],
    loop: false,
    typeSpeed: 75,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
   <div>
     <section className="home-section">
      <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16" id="Home">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white dark:text-white sm:text-lg lg:text-3xl">
                {text}
                <Cursor />
              </h2>
              <p className="max-w-lg mt-3 text-base leading-relaxed text-gray-600 text-white font-bold md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>

              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                </span>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">GET STARTED <span className='mx-1'><ArrowForwardIcon/></span></button>

              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
              <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>
   </div>
  );
};

export default Home;
