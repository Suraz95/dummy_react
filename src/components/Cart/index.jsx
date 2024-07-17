import React, { useState, useEffect } from 'react';
import ProductCardShow from './ProductCardShow';
import axios from 'axios';
// import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantities, setQuantities] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const fetchCart = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/cart', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCart(response.data.cart);
      console.log(cart);
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCart([]);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products');
      setProductsData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCart();
      await fetchProducts();
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      const cartItems = [];

      productsData.forEach(category => {
        category.subCategories.forEach(subCategory => {
          subCategory.products.forEach(product => {
            const cartItem = cart.find(item => item.prod_name === product.prod_name);
            if (cartItem) {
              const selectedOption = product.options.find(option => option._id === cartItem.options_id);
              if (selectedOption) {
                cartItems.push({ ...product, selectedOption });
              }
            }
          });
        });
      });

      setCartProducts(cartItems);
    }
  }, [cart, productsData, loading]);

  const handleOptionChange = (prodName, optionIndex) => {
    setSelectedOptions({
      ...selectedOptions,
      [prodName]: optionIndex
    });
  };

  const handleQuantityChange = (prodName, change) => {
    setQuantities({
      ...quantities,
      [prodName]: (quantities[prodName] || 1) + change
    });
  };

  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * discount / 100);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProductCardShow 
            ProductsData={cartProducts} 
            selectedOptions={selectedOptions}
            quantities={quantities}
            handleOptionChange={handleOptionChange}
            handleQuantityChange={handleQuantityChange}
            calculateDiscountedPrice={calculateDiscountedPrice}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
          />
        )}
      </div>
    </>
  );
};

export default Cart;
