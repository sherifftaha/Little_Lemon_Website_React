import React from 'react'
import { fetchAPI, summitAPI } from '../../util/fetch'
import Nav from '../../Sections/Nav/Nav'
import Footer from '../../Sections/Footer/Footer'
import ReservForm from '../../Sections/ReservForm/ReservForm'


export default function BookingPage() {

  return (

    <div>
      <Nav />
      <main className='container'>
        <ReservForm />
      </main>
      <Footer />
    </div>
  )
}
