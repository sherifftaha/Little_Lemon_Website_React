import React from 'react'
import { useState } from 'react'
import Nav from '../Sections/Nav'
import Footer from '../Sections/Footer'
import BookingForm from '../Sections/BookingForm'
import Main from '../components/Main'
export default function BookingPage() {
  return (
    <div>
      <Nav />
      <Main>
        <BookingForm/>
      </Main>
      <Footer />
    </div>
  )
}
