import React from 'react'
import './BookingConfirmation.css'

function BookingConfirmation({form}) {
  return (
    <div className='BookingConfirmation'>
        <h2 id='BookingConfirmation-DateHeader'>Date</h2>
        <p>{form.date}</p>
        <h2>Time</h2>
        <p>{form.time}</p>
        <h2>Number of guests</h2>
        <p>{form.guests}</p>
        <h2>Occasion</h2>
        <p>{form.occasion}</p>
    </div>
  )
}

export default BookingConfirmation