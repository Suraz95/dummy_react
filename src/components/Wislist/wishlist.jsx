import React, { useState, useEffect } from 'react';
import ProductCardShow from '../Productshowcard/ProductCardShow';
import axios from 'axios';
// import Navbar from '../Navbar/Navbar';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantities, setQuantities] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const fetchWishlist = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/wishlist', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setWishlist(response.data.wishlist);
      console.log(wishlist);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      setWishlist([]);
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
      await fetchWishlist();
      await fetchProducts();
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      const wishlistItems = [];

      productsData.forEach(category => {
        category.subCategories.forEach(subCategory => {
          subCategory.products.forEach(product => {
            if (wishlist.includes(product.prod_name)) {
              wishlistItems.push(product);
            }
          });
        });
      });

      setWishlistProducts(wishlistItems);
    }
  }, [wishlist, productsData, loading]);

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

  const handleAddToCart = async (product, selectedOption, quantity) => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.put(
        'http://localhost:8000/add-to-cart',
        {
          prod_name: product.prod_name,
          no_of_items:quantity,
          options_id: selectedOption._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log('Added to cart:', response.data);
      // Optionally, you can update the UI or show a message that the product was added to the cart successfully
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Handle error, show a notification, etc.
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProductCardShow 
            ProductsData={wishlistProducts} 
            selectedOptions={selectedOptions}
            quantities={quantities}
            handleOptionChange={handleOptionChange}
            handleQuantityChange={handleQuantityChange}
            calculateDiscountedPrice={calculateDiscountedPrice}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            handleAddToCart={handleAddToCart}
          />
        )}
      </div>
    </>
  );
};

export default Wishlist;
