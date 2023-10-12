import React from 'react'
import { useState, useReducer } from 'react'
import { fetchAPI, summitAPI } from '../../util/fetch'
import Nav from '../../Sections/Nav/Nav'
import Footer from '../../Sections/Footer/Footer'
import BookingForm from '../../Sections/BookingForm/BookingForm'
import BookingConfirmation from '../../Sections/BookingForm/BookingConfirmation'
import BookingSucces from '../../Sections/BookingForm/BookingSucces'


const initializeTimes = (date) => {
  return fetchAPI(date)
}


const updateTimes = (state, action) => {
  switch (action.type) {
    case 'update':
      return fetchAPI(new Date(action.state))
    default:
      return state
  }
}


export default function BookingPage() {


  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "1",
    occasion: "Birthday"
  });

  const [availableTimes, Dispatch] = useReducer(updateTimes, initializeTimes(new Date()))

  const [page, setPage] = useState(0);

  const component = [
    <BookingForm availableTimes={availableTimes} Dispatch={Dispatch} form={form} setForm={setForm} />,
    <BookingConfirmation form={form} />,
    <BookingSucces />
  ]

  const title = [
    'Book Now',
    'Confirmation',
  ]
  return (

    <div>
      <Nav />
      <main className='container Booking '>

        <h1>{title[page]}</h1>

        {component[page]}

        <button
          style={{ display: page === 0 ? 'none' : 'inline' }}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <button
          data-testid="next-submit"
          style={{ display: page === 2 ? 'none' : 'inline' }}
          onClick={() => setPage(page + 1)}
        >
          {page == 1 ? 'Submit' : 'Next'}
        </button>

      </main>
      <Footer />
    </div>
  )
}
