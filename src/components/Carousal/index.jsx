import React, { useState, useEffect } from 'react';
import image1 from '../../../public/images/img1.jpg';
import image2 from '../../../public/images/img2.jpg';

const sliderData = [
  {
    url: image1,
    text1: '100% Organic Fruits',
    text2: 'Explore Fresh & \n Juicy Fruits',
    buttonText: 'Shop Now'
  },
  {
    url: image2,
    text1: '100% Organic Vegetables',
    text2: 'The Best Way to \n Stuff Your Wallet',
    buttonText: 'Shop Now'
  }
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const goToSlide = (index) => {
    setSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [slide]);

  useEffect(() => {

    setCurrentText('');
    let currentIndex = 0;
    const text = sliderData[slide].text2;

    const timeout = setTimeout(() => {
      const char = text[currentIndex];
      setCurrentText((prevText) => prevText + char);
      currentIndex++;

      if (currentIndex < text.length) {
        timeoutFunc();
      }
    }, 100); 

    const timeoutFunc = () => {
      setTimeout(() => {
        const char = text[currentIndex];
        setCurrentText((prevText) => prevText + char);
        currentIndex++;

        if (currentIndex < text.length) {
          timeoutFunc();
        }
      }, 100); 
    };

    return () => clearTimeout(timeout);
  }, [slide]);

  return (
    <div className='max-w-full mt-40 relative flex justify-center items-center'>
      {sliderData.map((item, index) => (
        <div key={index} className={`transition-opacity duration-1000 ${index === slide ? 'opacity-100' : 'opacity-0'}`}>
          {index === slide && (
            <div className='relative'>
              <img className='w-screen h-[25vh] md:h-[40vh] sm:h-[30vh] lg:h-[70vh]' src={item.url} alt='Slide' />
              <div className='absolute inset-0 flex flex-col justify-center items-start p-8'>
                <div className='mb-4'>
                  <p className='text-green-500 text-2xl sm:text-xl md:text-2xl lg:text-2xl underline'>
                    {item.text1}
                  </p>
                  <p className='font-bold text-4xl sm:text-xl md:text-3xl lg:text-5xl transition-opacity duration-1000'>
                    {currentText.split('\n').map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>

                {window.innerWidth > 640 && (
                  <p className='text-lg mb-4 text-gray-600 animate-slide-in'>
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                )}

                <button className='bg-green-500 hover:bg-black text-white font-bold py-2 px-4 rounded'>
                  {item.buttonText}
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className='absolute bottom-4 flex justify-center w-full'>
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer mx-2 w-3 h-3 rounded-full ${index === slide ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
