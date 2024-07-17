import axios from 'axios';
import { useState } from 'react';
import { FaUser, FaEnvelope, FaMobileAlt, FaLock, FaArrowRight, FaRegUserCircle, FaKey } from 'react-icons/fa';

const SignUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    confirmPassword: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    userType: ''
  });

  const creatUser = async (e) => {
    try {
        const response = await axios.post('https://envanto-backend-api.onrender.com/register', formData);
        // formData.username,formData.email,formData.name,formData.password,formData.userType,formData.phone
        alert(response.data);
    } catch (error) {
        alert('Error registering user');
    }
};


  const handleSubmit = (e) => {

    
    e.preventDefault();
    
    if (formData.name && formData.username && formData.email && formData.phone && formData.password  && formData.userType) {
      creatUser();
      console.log(formData);
      setShowPopup(true);
      
    } else {
      alert('Please fill out all fields.');
    }
  };
  
  
  const closePopup = () => {
    setShowPopup(false);
    // Clear the form fields
    setFormData({
      name: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      userType: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-teal-50 p-4 mt-40">
      {/* Left side - Text */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-8 space-y-6">
      <h2 className="text-8xl font-extrabold text-teal-600 text-center italic font-cursive">
        Fresh Groceries Delivered to Your Doorstep
      </h2>

        <p className="text-gray-600 text-center font-bold text-2xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Experience the best quality and freshness in every bite.
        </p>
        <div className="flex items-center space-x-2 text-teal-600 cursor-pointer">
          <div>Sign Up Now</div>
          <div>
            <FaArrowRight size={20} />
          </div>
        </div>
      </div>

      {/* Right side - SignUp Form */}
      <div className="md:w-1/2 w-full bg-white rounded-lg shadow-md p-8 space-y-6 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold text-center text-teal-600">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <FaRegUserCircle className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="relative">
            <FaMobileAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="relative">
            <FaKey className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="relative">
            <select
              name="userType"
              value={formData.userType}
              onChange={handleInputChange}
              className="w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="" disabled defaultValue>
                User Type
              </option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', width: '50%' }}
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Popup / Modal */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-6xl text-teal-600 mb-4">✓</div>
            <p className="text-lg text-center mb-4">You are successfully registered!</p>
            <button
              onClick={closePopup}
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
