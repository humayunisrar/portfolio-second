import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Card from '../components/Card'


const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS." text="My Recent Work"/>
      <Card/>
      <Footer />
    </div>
  )
}

export default Project