import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

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
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>

  );
};

export default ImageSwiper;
