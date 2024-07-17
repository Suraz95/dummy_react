import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faDribbble, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 px-8 ">
        <div className='m-7' style={{ width: '100%' }}>
          <img src="https://webstockreview.net/images/dairy-clipart-grocery-item-4.png" alt="Carrot Logo" className="w-36 h-auto mb-4" />
          <p>Easy Grocery is the biggest market of grocery products. Get your daily needs from our store.</p>
          <ul className="mt-4">
            <li className="flex items-center mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-teal-800 mb-2 w-6 h-6" />
              51 Green St. Huntington, Ohio Beach, Ontario, NY 11746 KY 4783, USA
            </li>
            <li className="flex items-center mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-teal-800 w-6 h-6 mt-2" />
              example@email.com
            </li>
            <li className="flex items-center mb-4">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-teal-800 w-6 h-6 mt-1" />
              +91 123 4567890
            </li>
          </ul>
        </div>

        <div className='m-8 ml-28'>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">About Us</a></li>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Delivery Information</a></li>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Privacy Policy</a></li>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Terms & Conditions</a></li>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Contact Us</a></li>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Support Center</a></li>
          </ul>
        </div>

        <div className='m-8 md:ml-7'>
          <h3 className="text-xl font-bold mb-4">Category</h3>
          <ul>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Dairy & Bakery</a></li>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Fruits & Vegetable</a></li>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Snack & Spice</a></li>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Juice & Drinks</a></li>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Chicken & Meat</a></li>
            <li className="mb-5"><a href="#" className="hover:text-teal-600">Fast Food</a></li>
          </ul>
        </div>

        <div className='m-8 md:ml-[-4rem]'>
          <h3 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h3>
          <div className="flex mb-4">
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 rounded-l w-full"
              placeholder="Search here..."
            />
            <button className="px-4 py-2 bg-gray-300 border border-gray-300 text-black rounded-r">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          <div className="flex space-x-2 mb-4">
            <a href="#" className="p-2 bg-white border border-gray-300 rounded hover:bg-white-500 hover:text-teal-600">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="p-2 bg-white border border-gray-300 rounded hover:bg-white-500 hover:text-teal-600">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="p-2 bg-white border border-gray-300 rounded hover:bg-white-500 hover:text-teal-600">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
            <a href="#" className="p-2 bg-white border border-gray-300 rounded hover:bg-white-500 hover:text-teal-600">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="flex space-x-2">
            <div className="relative group">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/insta/1.jpg" alt="Category" className="w-20 h-20 rounded" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 rounded group-hover:opacity-100 transition-opacity">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
              </div>
            </div>
            <div className="relative group">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/insta/2.jpg" alt="Category" className="w-20 h-20 rounded" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 rounded group-hover:opacity-100 transition-opacity">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
              </div>
            </div>
            <div className="relative group">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/insta/3.jpg" alt="Category" className="w-20 h-20 rounded" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 rounded group-hover:opacity-100 transition-opacity">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
              </div>
            </div>
            <div className="relative group">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/insta/4.jpg" alt="Category" className="w-20 h-20 rounded" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 rounded group-hover:opacity-100 transition-opacity">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
              </div>
            </div>
            <div className="relative group">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/insta/5.jpg" alt="Category" className="w-20 h-20 rounded" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 rounded group-hover:opacity-100 transition-opacity">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 marker:">
        <p>© 2024 <a href="#" className="text-teal-900 font-bold">Easy Grocery</a>, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
