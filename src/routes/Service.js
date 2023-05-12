import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/im3.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'
export default function Service() {
  return (
    <div>
      <Navbar/>
      <Hero 
       cName="hero-mid"
       heroImg={AboutImg}
       title = "Service"
      
       btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </div>
  )
}
