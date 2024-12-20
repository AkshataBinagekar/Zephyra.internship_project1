import React from 'react'
import './AboutUs.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function AboutUs() {
  return (
    <div >
    <Navbar />
    <div className='aboutUs'>
<h1 className='about'>About Us</h1>
<p className='company_info'>about the company</p>
    </div>
  <Footer />
    </div>
  )
}

export default AboutUs
