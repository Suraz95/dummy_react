import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DiscountSection = () => {
  // State to manage which button's data is currently displayed
  const [selectedButton, setSelectedButton] = useState(0);

  // Sample data for each button (you can replace this with your actual data)
  const buttonData = [
    {
        image2: 'https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&w=800',
        image1: 'https://images.pexels.com/photos/3302492/pexels-photo-3302492.jpeg?auto=compress&cs=tinysrgb&w=800',
        discount1: '50',
        discount2: '40',
        item1: 'Cake',
        item2: 'Milk',
      title: 'Cake & Milk',
      available: '65',
    },
    {
      image1: 'https://images.pexels.com/photos/15378104/pexels-photo-15378104/free-photo-of-a-close-up-shot-of-a-raw-meat-on-a-wooden-board.jpeg?auto=compress&cs=tinysrgb&w=800',
      image2: 'https://images.pexels.com/photos/3296392/pexels-photo-3296392.jpeg?auto=compress&cs=tinysrgb&w=800',
      discount1: '35',
      discount2: '24',
      item1: 'Fresh Meat',
      item2: 'Fish Meat',
      title: 'Fresh Meat',
      available: '30',
    },
    {
      image1: 'https://images.pexels.com/photos/11287586/pexels-photo-11287586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image2: 'https://images.pexels.com/photos/7262898/pexels-photo-7262898.jpeg?auto=compress&cs=tinysrgb&w=800',
      discount1: '45',
      discount2: '20',
      item1: 'Coriander',
      item2: 'Broccoli',
      title: 'Vegetables',
      available: '25',
    },
    {
      image1: 'https://images.pexels.com/photos/1425358/pexels-photo-1425358.jpeg?auto=compress&cs=tinysrgb&w=800',
      image2: 'https://images.pexels.com/photos/7788437/pexels-photo-7788437.jpeg?auto=compress&cs=tinysrgb&w=800',
      discount1: '30',
      discount2: '25',
      item1: 'Apple',
      item2: 'Mango',
      title: 'Apple & Mango',
      available: '45',
    },
    {
      image1: 'https://images.pexels.com/photos/2459870/pexels-photo-2459870.png?auto=compress&cs=tinysrgb&w=800',
      image2: 'https://images.pexels.com/photos/5501052/pexels-photo-5501052.jpeg?auto=compress&cs=tinysrgb&w=800',
      discount1: '33',
      discount2: '15',
      item1: 'Strawberry',
      item2: 'Strawberry',
      title: 'Strawberry',
      available: '68',
    },
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <div className="mx-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 my-16">
      {/* Section 1: Buttons */}
      <div className="flex flex-col grid-items h-full flex flex-col justify-between">
        {buttonData.map((button, index) => (
          <button
            key={index}
            className={`py-4  bg-gray-100 text-black rounded-md focus:outline-none  border ${selectedButton === index ? 'text-teal-500' : 'hover:text-teal-500'}`}
            onClick={() => handleButtonClick(index)}
          >
            <div className='font-semibold'>{button.title}</div>
            <div className='text-gray-500 text-sm'> ({button.available} items)</div>
            
          </button>
        ))}
        <div className='w-full  border text-teal-600 bg-gray-100 flex justify-center rounded-md'>
            <NavLink to='products' className='py-4 w-full h-full font-semibold'>View More</NavLink>
        </div>
      </div>

      {/* Section 2 and 3: Displayed Data */}
      <div className=" flex justify-between grid-items h-full w-full">
        <div className='relative h-full w-full group'>
            <img className='h-[500px] w-full rounded-md object-cover' src={buttonData[selectedButton].image1} alt="" />
            <div className='transform text-white  absolute top-0 left-0 bg-black bg-opacity-50 group-transition-all group-ease-in-out groupt-duration-300 group-hover:rounded-md rounded-br-full rounded-md rounded-tl-[700px]	 h-36 w-48 overflow-hidden group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out group-hover:w-full group-hover:h-full'>
                <div className='flex items-center font-bold pl-6 pt-6'>
                    <div className='text-7xl'>{buttonData[selectedButton].discount1}</div>
                    <div className='text-2xl'>
                        <div>%</div>
                        <div>OFF</div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-1/2 z-10 text-white -translate-x-1/2 flex flex-col items-center'>
              <div className='text-3xl font-bold mb-2'>{buttonData[selectedButton].item1}</div>
              <button className='bg-teal-500 hover:bg-opacity-0 hover mb-8 border border-opacity-0 hover:border-opacity-100 hover:transition-all duration-500 px-6 py-2 rounded-md hover:border border-white'>Shop Now</button>
            </div>
        </div>
        
      </div>
      <div className=" flex justify-between grid-items h-full w-full">
        <div className='relative h-full w-full group'>
            <img className='h-[500px] w-full rounded-md object-cover' src={buttonData[selectedButton].image2} alt="" />
            <div className='transform text-white  absolute top-0 left-0 bg-black bg-opacity-50 group-transition-all group-ease-in-out groupt-duration-300 group-hover:rounded-md rounded-br-full rounded-md rounded-tl-[700px]	 h-36 w-48 overflow-hidden group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out group-hover:w-full group-hover:h-full'>
                <div className='flex items-center font-bold pl-6 pt-6'>
                    <div className='text-7xl'>{buttonData[selectedButton].discount2}</div>
                    <div className='text-2xl'>
                        <div>%</div>
                        <div>OFF</div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-1/2 z-10 text-white -translate-x-1/2 flex flex-col items-center'>
              <div className='text-3xl font-bold mb-2'>{buttonData[selectedButton].item2}</div>
              <button className='bg-teal-500 hover:bg-opacity-0 hover mb-8 border border-opacity-0 hover:border-opacity-100 hover:transition-all duration-500 px-6 py-2 rounded-md hover:border border-white'>Shop Now</button>
            </div>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default DiscountSection;
// rounded-r-full rounded-b-full
