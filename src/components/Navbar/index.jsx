import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faShoppingCart, faPhone, faSearch, faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
// import Logo from '../../assets/Logo.png';
import { Link, NavLink, Outlet } from 'react-router-dom'; 

const Navbar = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false); 
  const [showItems, setShowItems] = useState(false);
  const [showFruitsItems, setShowFruitsItems] = useState(false);
  const [showSnacksItems, setShowSnacksItems] = useState(false);
  const [showJuicesItems, setShowJuicesItems] = useState(false);

  const toggleMenuDropdown = () => {
    setMenuDropdown(!menuDropdown);
    setShowItems(true); 
    setShowFruitsItems(false);
    setShowSnacksItems(false); 
    setShowJuicesItems(false);
  };

  const handleButtonClick = () => {
    setShowItems(!showItems);
    setShowFruitsItems(false);
    setShowSnacksItems(false);
    setShowJuicesItems(false);
  };

  const handleFruitsClick = () => {
    setShowItems(false);
    setShowFruitsItems(!showFruitsItems);
    setShowSnacksItems(false);
    setShowJuicesItems(false);
  };

  const handleSnacksClick = () => {
    setShowItems(false);
    setShowFruitsItems(false);
    setShowSnacksItems(!showSnacksItems);
    setShowJuicesItems(false);
  };

  const handleJuicesClick = () => {
    setShowItems(false);
    setShowFruitsItems(false);
    setShowSnacksItems(false);
    setShowJuicesItems(!showJuicesItems);
  };

  return (
    <> 
    <div className="fixed top-0 w-full z-10  ">
      <div className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
           <NavLink to="/" className="flex items-center">
              <img src="../../../../public/images/grocery_logo.png" alt="Logo" className="h-16 mr-4" />
           </NavLink>
        </div>
          <div className="flex-grow mx-4 ml-28">
            <div className="relative">
              <input
                type="text"
                placeholder="Search For items..."
                className="w-full px-4 py-2 text-gray-900  border border-gray-300"
              />
              <button className="absolute right-0 top-0 bg-teal-500 text-white px-6 py-2 ">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div
              className="relative group"
              onMouseEnter={() => setAccountDropdown(true)}
              onMouseLeave={() => setAccountDropdown(false)}
            >
              <a href="#" className="flex items-center ml-20 space-x-2 hover:text-teal-500">
                <FontAwesomeIcon icon={faUser} className="text-xl " />
                <span>Account</span>
              </a>
              {accountDropdown && (
                <div
                  className="absolute left-0 mt-0 w-40 bg-white shadow-lg rounded-md z-50"
                  onMouseEnter={() => setAccountDropdown(true)}
                  onMouseLeave={() => setAccountDropdown(false)}
                >
                  <NavLink to='signup' className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Registration</NavLink>
                  <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Checkout</a>
                  <NavLink to='login' className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Login</NavLink>
                </div>
              )}
            </div>
            <a href="#" className="flex items-center space-x-2 hover:text-teal-500">
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
              <span > Wishlist</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-teal-500">
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
              <span >Cart</span>
            </a>
          </div>
        </div>

        <div className="bg-gray-100 h-0.5 ml-24 mr-24"></div>


        <div className="bg-white text-gray-900 py-2">
          <div className="container mx-auto flex items-center justify-between px-6 ">
            <div
            className="relative group"
            onMouseEnter={toggleMenuDropdown} // Close dropdown on mouse leave
            onMouseLeave={toggleMenuDropdown} // Close dropdown on mouse leave
              >
            <button className="text-gray-900  border  border-gray-300 rounded-md p-2" onClick={toggleMenuDropdown}>
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
            {menuDropdown && (
              <div className="absolute left-0 mb-14 w-auto  bg-white shadow-lg rounded-md z-50 text-left space-y-3 pt-5">
                  <div className="relative">
                      <button
                        onClick={handleButtonClick}
                        className="block px-4 py-2 text-teal-600 w-48 text-left border  border-teal-600 rounded-md"
                      >
                        Dairy & Bakery
                      </button>

                    {showItems && (
                      <div className="absolute left-full top-0 mt-0 w-auto bg-white shadow-lg rounded-md z-50 text-left space-y-3 h-64">
                        <div className="grid grid-cols-2 gap-4 w-96">
                          {/* Column 1 - Dairy */}
                          <div>
                            <h3 className="text-lg font-bold text-center">Dairy</h3>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Milk
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Ice Cream
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Cheese
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Frozen Custard
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Frozen Yogurt
                            </button>
                          </div>

                          {/* Column 2 - Bakery */}
                          <div>
                            <h3 className="text-lg font-bold text-center">Bakery</h3>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Cake And Pastry
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Rusk Toast
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Bread & Buns
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Chocolate Brownie
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Cream Roll
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                </div>

            {/* Fruits & Vegetables dropdown */}
            <div className="relative">
                        <button
                          onClick={handleFruitsClick}
                          className="block px-4 py-2 text-gray-900 hover:text-teal-600 w-48 text-left border border-black hover:border-teal-600 rounded-md"
                        >
                          Fruits & Vegetables{" "}
                        
                        </button>
                        {showFruitsItems && (
                          <div className="absolute left-full top-0 mt-0 w-auto h-64 bg-white shadow-lg rounded-md z-50 text-left space-y-3">
                            <div className="grid grid-cols-2 gap-4 w-96">
                              {/* Fruits */}
                              <div>
                                <h3 className="text-lg font-bold text-center">Fruits</h3>
                                <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                                  Apple
                                </button>
                                <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                                  Orange
                                </button>
                                <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                                  Banana
                                </button>
                                <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                                  Grape
                                </button>
                                <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                                  Pineapple
                                </button>
                              </div>

                              {/* Vegetables */}
                              <div>
                                <h3 className="text-lg font-bold text-center">
                                  Vegetables
                                </h3>
                                <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                                  Cauliflower
                                </button>
                                <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                                  Bell Peppers
                                </button>
                                <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                                  Broccoli
                                </button>
                                <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                                  Cabbage
                                </button>
                                <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                                  Tomato
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                  </div>


                {/* Snacks & Spice dropdown */}
                <div className="relative">
                    <button
                      onClick={handleSnacksClick}
                      className="block px-4 py-2 text-gray-900 hover:text-teal-600 w-48 text-left border border-black hover:border-teal-600 rounded-md"
                    >
                      Snacks & Spice
                    </button>

                    {showSnacksItems && (
                      <div className="absolute left-full top-0 mt-0 w-auto h-64 bg-white shadow-lg rounded-md z-50 text-left space-y-3">
                        <div className="grid grid-cols-2 gap-4 w-96">
                          {/* Snacks */}
                          <div>
                            <h3 className="text-lg font-bold text-center">Snacks</h3>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              French Fries
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Potato Chips
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Biscuits & Cookies
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Popcorn
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Rice Cakes
                            </button>
                          </div>

                          {/* Spice */}
                          <div>
                            <h3 className="text-lg font-bold text-center">Spice</h3>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Cinnamon Powder
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Cumin Powder
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Fenugreek Powder
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Pepper Powder
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Long Pepper
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>


                  {/* Juices & Drinks dropdown */}
                  <div className="relative group">
                    <button
                      onClick={handleJuicesClick}
                      className="block px-4 py-2 text-gray-900 hover:text-teal-600 w-48 text-left border border-black hover:border-teal-600 rounded-md"
                    >
                      Juices & Drinks{" "}
                    </button>
                    {showJuicesItems && (
                      <div className="absolute left-full top-0 mt-0 w-auto h-64 bg-white shadow-lg rounded-md z-50 text-left space-y-3">
                        <div className="grid grid-cols-2 gap-4 w-96">
                          {/* Juices */}
                          <div>
                            <h3 className="text-lg font-bold text-center">Juices</h3>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Mango Juice
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Coconut Water
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Tetra Pack
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Apple Juices
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Lychee Juice
                            </button>
                          </div>

                          {/* Soft Drinks */}
                          <div>
                            <h3 className="text-lg font-bold text-center">Soft Drink</h3>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Breizh Cola
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Green Cola
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Jolt Cola
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Mecca Cola
                            </button>
                            <button className="block px-4 py-2 text-gray-900 hover:text-teal-500 w-full text-left">
                              Topsia Cola
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <a href="#" className="block px-4 py-2  text-gray-900 hover:text-teal-500 w-48 text-left border border-black hover:border-teal-500 rounded-md">
                    View All
                  </a>
          </div>
        )}

    </div>

              <div className="flex space-x-8">
              <a href="#" className="hover:text-teal-500">Home</a>

              <div
                className="relative group"
                onMouseEnter={() => setPagesDropdown(true)}
                onMouseLeave={() => setPagesDropdown(false)}
              >
                <a href="#" className="hover:text-teal-500 flex items-center">
                About Us <FontAwesomeIcon icon={faCaretDown} className="ml-1 "  />
                </a>
                {pagesDropdown && (
                  <div
                    className="absolute left-0 mt-0 w-40 bg-white shadow-lg rounded-md z-50 py-5"
                    onMouseEnter={() => setPagesDropdown(true)}
                    onMouseLeave={() => setPagesDropdown(false)}
                  >
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Cart</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Checkout</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Track Order</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Wishlist</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">FAQ</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Login</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Register</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Policy</a>
                  </div>
                )}
              </div>
              
            
                <a href="#" className="hover:text-teal-500 flex items-center">
                  Category 
                </a>
               
           
              
              <div
                className="relative group"
                onMouseEnter={() => setProductsDropdown(true)}
                onMouseLeave={() => setProductsDropdown(false)}
              >
                <a href="#" className="hover:text-teal-500 flex items-center">
                  Products <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </a>
                {productsDropdown && (
                  <div
                    className="absolute left-0 mt-0 w-40 bg-white shadow-lg rounded-md z-50 py-5"
                    onMouseEnter={() => setProductsDropdown(true)}
                    onMouseLeave={() => setProductsDropdown(false)}
                  >
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Shop Left Sidebar</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Shop Right Sidebar</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Full Width</a>
                  </div>
                )}
              </div>
              
              <div
                className="relative group"
                onMouseEnter={() => setBlogDropdown(true)}
                onMouseLeave={() => setBlogDropdown(false)}
              >
                <a href="#" className="hover:text-teal-500 flex items-center">
                  Services <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </a>
                {blogDropdown && (
                  <div
                    className="absolute left-0 mt-0 w-40 bg-white shadow-lg rounded-md z-50 py-5"
                    onMouseEnter={() => setBlogDropdown(true)}
                    onMouseLeave={() => setBlogDropdown(false)}
                  >
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Shop Left Sidebar</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Shop Right Sidebar</a>
                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-teal-500 hover:text-white">Full Width</a>
                  </div>
                )}
              </div>
                <NavLink to='contactus' className="hover:text-teal-500 flex items-center">
                Contact Us 
                </NavLink>
            
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} />
              <span>+123 ( 456 ) ( 7890 )</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  );
};

export default Navbar;
