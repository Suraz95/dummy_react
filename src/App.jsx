import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from "./components/Login/index"
import Cart from "./components/Cart/index"
import Footer from './components/Footer'
import Wishlist from './components/Wislist/wishlist'
import Testimonials from './components/Testimonials'
import Carousel from './components/Carousal'
import CardsCarousel from './components/CardsCarousel'
import ServicesCarousel from './components/ServicesCarousel'
import DiscountSection from './components/DiscountSection'
import CounterSection from './components/CounterSection'
import LatestNews from './components/LatestNews'
import ProductList from './components/PopularProducts/ProductList'
import ProductCard from './components/PopularProducts/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Navbar/> */}
     {/* <Footer/> */}
     <Cart/>
     {/* <Wishlist/> */}
    </>
  )
}

export default App
