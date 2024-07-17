import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CounterSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section 
      className="relative my-16 py-32 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://www.mynewhomerecipe.com/assets/main/images/banner-main.jpg')",
        borderRadius: '20px', // Added border radius to the section
      }}
    >
      <div className="container">
        <div className="flex justify-end items-center px-4 py-4">
          <div 
            className="bg-white bg-opacity-20 shadow-lg rounded-md p-6 max-w-lg custom-shadow border " // Added border to the counter section
            data-aos="fade-up"
          >
            <div className="text-left" data-aos="fade-up" data-aos-delay="200">
              <span className="text-2xl font-semibold text-red-500"><code>35%</code> OFF</span>
              <h4 className="text-3xl text-purple-800 font-bold italic mt-4" data-aos="fade-up" data-aos-delay="400">Eat Well, Spend Less</h4>

              <p className="mt-2 text-gray-600" data-aos="fade-up" data-aos-delay="600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.</p>
              <div id="timer" className="mt-8">
                <div className="flex space-x-4">
                  <div className="text-center border border-gray-800 rounded-md p-2" data-aos="fade-up" data-aos-delay="800">
                    <h4 className="text-2xl font-bold">
                      <span id="days">{timeLeft.days || '0'}</span>
                      <span> Days</span>
                    </h4>
                  </div>
                  <div className="text-center border border-gray-800 rounded-md p-2" data-aos="fade-up" data-aos-delay="1000">
                    <h4 className="text-2xl font-bold">
                      <span id="hours">{timeLeft.hours || '00'}</span>
                      <span> Hrs</span>
                    </h4>
                  </div>
                  <div className="text-center border border-gray-800 rounded-md p-2" data-aos="fade-up" data-aos-delay="1200">
                    <h4 className="text-2xl font-bold">
                      <span id="minutes">{timeLeft.minutes || '00'}</span>
                      <span> Min</span>
                    </h4>
                  </div>
                  <div className="text-center border border-gray-800 rounded-md p-2" data-aos="fade-up" data-aos-delay="1400">
                    <h4 className="text-2xl font-bold">
                      <span id="seconds">{timeLeft.seconds || '00'}</span>
                      <span> Sec</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
