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
        'Congratulation!'
    ]




    return (
        <div className='ReservForm'>

            <div className='progressBarParent' >
                <div className='ProgressBarChild' style={{ width: `${100 / 3 * (page + 1)}%` }}></div>
            </div>

            <h1 className='ReservFormTitle'>{title[page]}</h1>

            {components[page]}
            <div className='ReservFormFooter'>

                <button
                    className='PrevBtn btn'
                    style={{ display: page === 0 ? 'none' : 'inline', }}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>

                <button
                    className='next-submitBtn btn'
                    disabled={(form.date === "" || (form.guests < 1 || form.guests > 10)) ? true : false}
                    data-testid="next-submit"
                    style={{ display: page === 2 ? 'none' : 'inline' }}
                    onClick={() => setPage(page + 1)}
                >
                    {page == 1 ? 'Submit' : 'Next'}
                </button>

            </div>
        </div>

    )
}

export default ReservForm