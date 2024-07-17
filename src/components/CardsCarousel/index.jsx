import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import cardsData from '../../data/cardsData.json';

const CardsCarousel = () => {
  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    modules: [Autoplay],
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
        <div className='mt-16 mx-16'>

            <Swiper {...swiperParams}>
            {cardsData.map((card, index) => (
                <SwiperSlide key={index} className="relative">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <img src={card.image} alt="product-banner" className="w-full h-full object-cover rounded-md" />
                    <div className="absolute inset-y-0 left-0 bg-opacity-50 flex flex-col items-start justify-center p-4 text-center text-white">
                    <h5 className="text-2xl md:text-2xl lg:text-2xl text-black font-bold mb-2 text-left">
                        {card.firstTitle} <br /> {card.secondTitle}
                    </h5>
                    <p className="md:text-xl lg:text-xl mb-4 text-gray-500">
                        <span className='text-rose-400 font-bold lg:text-2xl'>
                        {card.discount}&nbsp;
                        </span>
                        {card.description}
                    </p>
                    <a href={card.buttonLink} className="bg-rose-400 text-white px-4 py-2 rounded hover:bg-black transition duration-300">
                        Shop Now
                    </a>
                    </div>
                </motion.div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </>
  );
};

export default CardsCarousel;
