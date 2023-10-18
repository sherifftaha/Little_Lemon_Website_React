import React from 'react'
import { useState, useReducer } from 'react'
import { fetchAPI, summitAPI } from '../../util/fetch'
import BookingForm from './BookingForm'
import BookingConfirmation from './BookingConfirmation'
import BookingSucces from './BookingSucces'
import './ReservForm.css'


const initializeTimes = (date) => {
    return fetchAPI(date)
}


const updateTimes = (state, action) => {
    switch (action.type) {
        case 'update':
            fetchAPI(new Date(action.state))
        default:
            return state
    }
}


function ReservForm() {
    const [availableTimes, Dispatch] = useReducer(updateTimes, initializeTimes(new Date()))

    const [page, setPage] = useState(0);

    const [form, setForm] = useState({
        date: "",
        time: availableTimes[0],
        guests: "1",
        occasion: "Birthday"
    });


    const components = [
        <BookingForm availableTimes={availableTimes} Dispatch={Dispatch} form={form} setForm={setForm} />,
        <BookingConfirmation form={form} />,
        <BookingSucces />
    ]

    const title = [
        'Book Now',
        'Confirmation',
    ]
    return (
        <div className='ReservForm'>

            <progress value={100 / 3 * (page + 1)} max={100}>`${100 / 3 * (page + 1)}%`</progress>

            <h1>{title[page]}</h1>

            {components[page]}

            <button
                style={{ display: page === 0 ? 'none' : 'inline' }}
                onClick={() => setPage(page - 1)}
            >
                Prev
            </button>

            <button
                className='next-submit'
                disabled={page === 0 && form.date === "" ? true : false}
                data-testid="next-submit"
                style={{ display: page === 2 ? 'none' : 'inline' }}
                onClick={() => setPage(page + 1)}
            >
                {page == 1 ? 'Submit' : 'Next'}
            </button>

        </div>

    )
}

export default ReservForm