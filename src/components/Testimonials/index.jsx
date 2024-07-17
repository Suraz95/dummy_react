import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Stephen Smith',
    position: 'Co Founder',
    image: 'https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/testimonial/1.jpg',
    text: '“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”',
    rating: 5,
  },
  {
    name: 'Lorem Robinson',
    position: 'Manager',
    image: 'https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/testimonial/2.jpg',
    text: '“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”',
    rating: 4,
  },
  {
    name: 'Saddika Alard',
    position: 'Team Leader',
    image: 'https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/testimonial/3.jpg',
    text: '“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”',
    rating: 5,
  },
  {
    name: 'Johi Doe',
    position: 'Developer',
    image: 'https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/testimonial/2.jpg',
    text: '“Lorem ipsum dolor sit amet, sed do incididunt ut labore et dolore magna aliqua.”',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    position: 'Designer',
    image: 'https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/testimonial/3.jpg',
    text: '“Ut enim ad minim veniam, quis nostrud ut aliquip ex ea commodo consequat.”',
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3));
  };

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 3));
  };

 

  return (
    <div className="bg-white-100 py-16">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold">Great Words From People</h2>
        <p className="text-gray-600 mt-4 px-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap -mx-4 justify-center">
          {[...testimonials, ...testimonials, ...testimonials].slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8 relative"> {/* Adjusted margin here */}
              <div className="bg-gray-200 p-8 pt-16 rounded-lg shadow-lg">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="text-6xl text-gray-200 opacity-20">“</span>
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <img
                    className="w-24 h-24 rounded-full border-8 border-white shadow-md"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div className="text-center ">
                  <p className="text-xl font-semibold text-gray-600">{testimonial.position}</p>
                  <p className="text-2xl font-bold mt-2">{testimonial.name}</p>
                  <p className="text-gray-600 mt-4">{testimonial.text}</p>
                  <div className="flex justify-center mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gray-300" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevTestimonials}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 rounded-full px-2 py-1"
        >
          &lt;
        </button>
        <button
          onClick={nextTestimonials}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 rounded-full px-2 py-1"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;