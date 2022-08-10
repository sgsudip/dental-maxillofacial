import React from 'react'
import About from '../About/About'
import BookingAppointment from '../BookingAppointment/BookingAppointment'
import SmileTransformation from '../Cards/SmileTransformation'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import OfficeInfo from '../OfficeInfo/OfficeInfo'
import OurServices from '../OurServices/OurServices'
import Reviews from '../Reviews/Reviews'
import ServiceTop from '../ServiceTop/ServiceTop'
import WhyChoose from '../WhyChoose/WhyChoose'
import ReactCardSlider from '../Carousel/ReactCardSlider'

const Home = () => {
  return (
    <>
        <HeroSection />
        <ServiceTop />
        <About />
        <ReactCardSlider />
        <SmileTransformation />
        <BookingAppointment />
        <OurServices />
        <WhyChoose />
        <OfficeInfo/>
        <Reviews />
        <Footer />
    </>
  )
}

export default Home