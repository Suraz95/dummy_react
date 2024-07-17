import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const AllProducts = () => {
  const [productsData, setProductsData] = useState(null); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null); 
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('https://envanto-backend-api.onrender.com/products');
        setProductsData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(prevCategory => prevCategory === categoryName ? null : categoryName);
  };

  const handleBrandSelect = (brandName) => {
    setSelectedBrand(prevBrand => prevBrand === brandName ? null : brandName);
  };

  const handleOptionChange = (productName, optionIndex) => {
    setSelectedOptions(prevSelected => ({
      ...prevSelected,
      [productName]: optionIndex,
    }));
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productName]: 1, 
    }));
  };

  const handleQuantityChange = (productName, increment) => {
    setQuantities((prevQuantities) => {
      const key = productName;
      const newQuantity = (prevQuantities[key] || 1) + increment;
      return {
        ...prevQuantities,
        [key]: Math.max(newQuantity, 1),
      };
    });
  };

  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * discount / 100);
  };

  if (!productsData) {
    return <div>Loading...</div>; 
  }

  const uniqueBrands = [...new Set(productsData.flatMap(cat => cat.subCategories.flatMap(subCat => subCat.products.map(product => product.brand))))];

  return (
    <div className="p-4 mt-40">
      <div className="flex space-x-4">
        <div className="w-1/4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          {productsData.map(cat => (
            cat.subCategories.map(subCat => (
              <button
                key={subCat.subCat_name}
                className={`block w-full text-left px-4 py-2 mb-2 rounded ${
                  selectedCategory === subCat.subCat_name ? 'bg-teal-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleCategorySelect(subCat.subCat_name)}
              >
                {subCat.subCat_name}
              </button>
            ))
          ))}
          <h2 className="text-xl font-bold mt-4 mb-4">Brands</h2>
          {uniqueBrands.map(brand => (
            <button
              key={brand}
              className={`block w-full text-left px-4 py-2 mb-2 rounded ${
                selectedBrand === brand ? 'bg-teal-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleBrandSelect(brand)}
            >
              {brand}
            </button>
          ))}
        </div>
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-4">
            {productsData.map(cat => (
              cat.subCategories
                .filter(subCat => (!selectedCategory || subCat.subCat_name === selectedCategory))
                .flatMap(subCat => subCat.products.filter(product => !selectedBrand || product.brand === selectedBrand))
                .map((product) => {
                  const selectedOptionIndex = selectedOptions[product.prod_name] ?? 0;
                  const selectedOption = product.options[selectedOptionIndex];
                  const quantity = quantities[product.prod_name] || 1;
                  const discountedPrice = calculateDiscountedPrice(selectedOption.price, selectedOption.discount);
                  const finalPrice = discountedPrice * quantity;

                  return (
                    <div key={product._id} className="border p-4 relative">
                      {selectedOption.discount > 0 && (
                        <div className="absolute left-0 top-0 bg-yellow-400 p-1">
                          {selectedOption.discount}% Off
                        </div>
                      )}
                      <img src={product.image} alt={product.prod_name} className="w-full h-48 object-cover mb-2" />
                      <div className="text-xl font-bold">{product.brand}</div>
                      <div className="text-lg">{product.prod_name}</div>
                      <p className="mb-2">{product.description}</p>
                      <select
                        className="bg-teal-500 text-white p-2 mb-2 w-full "
                        value={selectedOptionIndex}
                        onChange={(e) => handleOptionChange(product.prod_name, Number(e.target.value))}
                      >
                        {product.options.map((option, index) => (
                          <option className='appearance-none bg-white text-black' key={index} value={index}>
                            {option.prod_quantity} - ₹{option.price}
                          </option>
                        ))}
                      </select>
                      <div className="mt-2">
                        ₹{selectedOption.price}
                        {selectedOption.discount > 0 && (
                          <span className="ml-2 text-red-500">
                            ₹{discountedPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mb-2 mt-4">
                        <button className="bg-gray-200 px-2 py-1" onClick={() => handleQuantityChange(product.prod_name, -1)}>
                          - 
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          readOnly
                          className="w-12 text-center"
                        />
                        <button
                          className="bg-gray-200 px-2 py-1"
                          onClick={() => handleQuantityChange(product.prod_name, 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="mt-2 text-xl font-bold">
                        Final Price: ₹{finalPrice.toFixed(2)}
                      </div>
                    </div>
                  );
                })
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
