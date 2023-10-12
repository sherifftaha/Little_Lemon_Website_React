import React from 'react'
import Nav from '../Sections/Nav/Nav'
import Hero from '../Sections/Hero/Hero'
import Specials from '../Sections/Specials/Specials'
import Testimonials from '../Sections/Testimonials/Testimonials'
import About from '../Sections/About/About'
import Footer from '../Sections/Footer/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  )
}
