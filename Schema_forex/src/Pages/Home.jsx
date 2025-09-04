import React from 'react'
import Header from '../components/Layout/Navbar'
import HeroBanner from '../components/Home/HeroBanner'
import ServicesSection from '../components/Home/ServicesSection'
import TestimonialSection from '../components/Home/TestimonialSection'
import ContactUs from './ContactUs'
import QuotePopup from '../components/Home/Quote'
import BrokerCard from '../components/Home/BrokerCard'
import ContactHome from '../components/Home/ContactHome'
import WhyChoose from '../components/Home/WhyChoose'
import AboutStatsSection from '../components/Home/Counter'
import CEOSection from '../components/Home/CEOSection'
import BlogSection from '../components/Blog/BlogSlider'
import IcmSection from '../components/Home/BrokerCard'
import TradingViewChart from '../components/Home/TradingViewChart'
// import BlogSection from '../components/Home/CEOSection'
const Home = () => {
  return (
    <div>
      <>
        <Header />
        <HeroBanner />
        <TradingViewChart />
        <ServicesSection />
        <AboutStatsSection />
         <IcmSection />
        <TestimonialSection />
        <WhyChoose />
        <CEOSection />
        <BlogSection />
        <ContactHome />
        <QuotePopup />
      </>
    </div>
  )
}

export default Home