import React, { useEffect, useState } from 'react';
import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import productsData from '../../../data/popularProducts.json';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Modal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('500gm');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
        <button onClick={onClose} className="float-right bg-white border text-black hover:text-gray-700">&times;</button>
        <div className="flex">
          <div className="w-1/2">
            <img src={product.image} alt={product.name} className="w-full h-auto" />
          </div>
          <div className="w-1/2 pl-6">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} className={`w-5 h-5 fill-current ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 .288l2.833 8.718h9.167l-7.417 5.392 2.833 8.719-7.416-5.391-7.416 5.391 2.833-8.719-7.417-5.392h9.167z" />
                </svg>
              ))}
              <span className="ml-2">({product.rating} Review)</span>
            </div>
            <p className="text-2xl font-bold text-green-600 mb-4">₹{product.price} <span className="text-sm text-gray-500 line-through">₹{product.original_price}</span></p>
            <div className="mb-4">
              <p className="font-bold mb-2">Size/Weight:</p>
              <div className="flex space-x-2">
                {['500gm', '1kg', '2kg', '5kg'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded ${size === selectedSize ? 'bg-[#64b496] text-white' : 'bg-white text-black border-gray-300'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <input type="number" defaultValue={1} min={1} className="w-16 px-2 py-1 border rounded mr-4 bg-white text-black" />
              <button className="bg-[#64b496] text-white px-4 py-2 rounded">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [zoomStyle, setZoomStyle] = useState({});

  useEffect(() => {
    const allProducts = productsData.categories.flatMap(category =>
      category.items.map(item => ({ ...item, category: category.name }))
    );
    setProducts(shuffleArray(allProducts));
  }, []);

  const handleModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleMouseMove = (e, index) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    setZoomStyle({
      [`img${index}`]: {
        transformOrigin: `${x}px ${y}px`
      }
    });
  };

  return (
    <>
    <div className="text-center mt-32">
    <h1 className="text-2xl font-bold mb-2 text-black">Popular Products</h1>
    <p className="text-gray-500 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
    <div className="flex w-full px-16">
      <div className="w-1/4 bg-white pr-4 py-4">
        <ul>
          <li className="mb-2">
            <button className="w-full text-left flex items-center justify-between px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
              All <span>&rarr;</span>
            </button>
          </li>
          {productsData.categories.map(category => (
            <li key={category.name} className="mb-2">
              <button className="w-full text-left flex items-center justify-between px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
                {category.name} <span>&rarr;</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="mb-4 relative">
          <img
            src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/product-banner.jpg"
            alt="Juicy Fruits"
            className="rounded h-[520px] w-[520px] object-cover" 
          />
          <div className="absolute top-0 left-0 transform text-left p-4">
            <h2 className="text-3xl font-bold text-white">Juicy</h2>
            <h3 className="text-3xl font-bold text-white text-[#f7e8aa]">FRUITS</h3>
            <p className="text-lg text-white mt-2">100% Natural</p>
            <button className="mt-4 bg-[#64b496] text-white px-6 py-2 rounded-2">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="w-3/4 container mx-auto p-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="relative bg-white border border-gray-300 rounded overflow-hidden shadow-lg text-black text-sm">
              <div 
                className="relative w-full h-48 bg-gray-200 overflow-hidden zoom-container"
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                <img 
                  className="w-full h-full object-cover zoom-image" 
                  src={product.image} 
                  alt={product.name} 
                  style={zoomStyle[`img${index}`] || {}} 
                />
                <div className="absolute inset-0 flex flex-col p-2 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                  <FaHeart className="text-white text-2xl cursor-pointer self-end mb-2" />
                  <FaEye className="text-white text-2xl cursor-pointer self-end" onClick={() => handleModal(product)} />
                  <FaShoppingCart className="text-white text-2xl cursor-pointer self-end mb-" />
                </div>
              </div>
              <div className="px-4 py-2 pt-6">
                <div className="text-gray-600 text-xs mb-2 text-center">{product.category}</div>
                <div className="flex items-center justify-center mb-1">
                  <span className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg key={i} className={`w-3 h-3 fill-current ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 .288l2.833 8.718h9.167l-7.417 5.392 2.833 8.719-7.416-5.391-7.416 5.391 2.833-8.719-7.417-5.392h9.167z" />
                      </svg>
                    ))}
                  </span>
                  <span className="ml-1">({product.rating})</span>
                </div>
                <div className="text-sm  text-center font-semibold my-4">{product.name}</div>
                <p className="text-center text-sm my-2">
                  <span className="text-[#64b496] font-bold">₹{product.price} </span>
                   <span className="text-black line-through">{product.original_price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <Modal product={selectedProduct} onClose={() => setShowModal(false)} />}
    </div>
    </>
  );
};

export default ProductCard;
