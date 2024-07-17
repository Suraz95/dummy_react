import React from 'react';

const ProductCardShow = ({ 
  ProductsData, 
  selectedOptions, 
  quantities, 
  handleOptionChange, 
  handleQuantityChange, 
  calculateDiscountedPrice, 
  selectedCategory, 
  selectedBrand, 
  handleAddToCart 
}) => {
  return (
    <div className="w-4/4">
      <div className="grid grid-cols-3 gap-4">
        {ProductsData.map(product => {
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
              <button
                className="bg-blue-500 text-white p-2 mt-4 w-full"
                onClick={() => handleAddToCart(product, selectedOption, quantity)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCardShow;
