import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ImageSwiper = () => {
  const images = [
    'https://zellbury.com/cdn/shop/files/formal-shirts-e003-5_9760eda9-a782-4e13-a062-e9a7b89583d5.jpg?v=1711608551&width=1946',
    'https://zellbury.com/cdn/shop/files/formal-shirts-e003-5_9760eda9-a782-4e13-a062-e9a7b89583d5.jpg?v=1711608551&width=1946',
    'https://zellbury.com/cdn/shop/files/formal-shirts-e003-5_9760eda9-a782-4e13-a062-e9a7b89583d5.jpg?v=1711608551&width=1946',
    'https://zellbury.com/cdn/shop/files/formal-shirts-e003-5_9760eda9-a782-4e13-a062-e9a7b89583d5.jpg?v=1711608551&width=1946',
  ];

  return (
    <div>
      <h1 className='text-center text-5xl my-20 font-bold'>Our Testimonial</h1>
      <div className="swiper-container ml-10 mr-10">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="image-container">
                <img src={image} alt={`Slide ${index + 1}`} className="image" />
                <div className="overlay text-center">
                  <h1 className='text-2xl font-bold red-600'> Gennady</h1>
                  <p className='my-2'>As of October 2023, Gennady is the highest-rated programmer on Codeforces, CodeChef, Topcoder, AtCoder and HackerRank</p>
                  <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More <ArrowForwardIcon/></button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSwiper;
