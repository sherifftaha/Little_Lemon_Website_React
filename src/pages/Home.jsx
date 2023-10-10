import React from 'react'
import Nav from '../Sections/Nav'
import Hero from '../Sections/Hero'
import Specials from '../Sections/Specials'
import Testimonials from '../Sections/Testimonials'
import About from '../Sections/About'
import Footer from '../Sections/Footer'
import Main from '../components/Main'

export default function Home() {
  return (
    <>
      <Nav />
      <Main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </Main>
      <Footer />
    </>
  )
}
