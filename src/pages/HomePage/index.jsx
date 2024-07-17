import React from 'react'
import Carousel from '../../components/Carousal'
import DiscountSection from '../../components/DiscountSection'
import ProductCard from '../../components/PopularProducts/ProductCard'
import CardsCarousel from '../../components/CardsCarousel'
import ServicesCarousel from '../../components/ServicesCarousel'
import CounterSection from '../../components/CounterSection'
import Testimonials from '../../components/Testimonials'
import LatestNews from '../../components/LatestNews'

const HomePage = () => {
  return (
    <>

      <Carousel/>
      <DiscountSection/>
      <ProductCard/>
      {/* <ProductList/> */}
      <CardsCarousel/>
      <ServicesCarousel/>
      <CounterSection/>
      <Testimonials/>
      <LatestNews/>
    </>
  )
}

export default HomePage