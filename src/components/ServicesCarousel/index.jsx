import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faHeadset,
  faTruck,
  faDollarSign,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import servicesData from "../../data/serviceCardsData.json";

const iconMap = {
  faHeadset: faHeadset,
  faTruck: faTruck,
  faDollarSign: faDollarSign,
  faBoxOpen: faBoxOpen,
};

const ServicesCarousel = () => {
  const swiperParams = {
    spaceBetween: 24,
    slidesPerView: 4,
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
        slidesPerView: 4,
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
        <div className="mx-16">

            <Swiper {...swiperParams}>
            {servicesData.map((service, index) => (
                <SwiperSlide key={index} className="relative mt-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="cr-services py-8 px-10 bg-white rounded-md shadow-md
                    bg-gray-100 border">
                    <div className="cr-services-image flex justify-center items-center text-4xl text-rose-400 mb-4">
                    <FontAwesomeIcon icon={iconMap[service.icon]} />
                    </div>
                    <div className="cr-services-contain text-center">
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                    </div>
                </motion.div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </>
  );
};

export default ServicesCarousel;
