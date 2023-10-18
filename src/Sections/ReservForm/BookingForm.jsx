import React, { useEffect } from 'react';
import './BookingForm.css';


export default function BookingForm(props) {

    useEffect(() => {
        props.Dispatch({ type: 'update', state: props.form.date })
        // console.log(props.form.date);
    }, [props.form.date])

    return (
        <form className="BookingForm"
            aria-labelledby="booking-form-label"
            data-testid="booking-form"

            onSubmit={(event) => { event.preventDefault() }}
        >



            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                aria-label="On Click"
                aria-labelledby="res-date"
                data-testid="date"
                required
                value={props.form.date}
                onChange={(event) => {
                    const selectedDate = new Date(event.target.value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0)
                    if (selectedDate >= today) {
                        props.setForm((prevState) => ({ ...prevState, date: event.target.value }));
                    } else {
                        alert("Please select a date equal to or later than today.");
                    }
                }
                }
            />




            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={props.form.time}
                required
                onChange={(event) =>
                    props.setForm((prevState) => ({
                        ...prevState,
                        time: event.target.value,
                    }))
                }
                aria-label="On Click"
                aria-labelledby="res-time"
            >
                {props.form.date ? props.availableTimes.map((time, index) => {
                    return (
                        <option key={index} value={time} data-testid="time">
                            {time}
                        </option>
                    );
                }) : <option value="" disabled selected hidden>Choose date first</option>}
            </select>




            <label htmlFor="res-guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="res-guests"
                value={props.form.guests}
                required
                onChange={(event) =>
                    props.setForm((prevState) => ({
                        ...prevState,
                        guests: event.target.value,
                    }))
                }
                aria-label="On Click"
                aria-labelledby="guests"
                style={{ borderColor: (props.form.guests < 1 || props.form.guests > 10) ? 'red' : '#DBDBDB' }}
            />
            {(props.form.guests < 1 || props.form.guests > 10) && <p className='invalidP'>Number must be Between 1 and 10 inclusive </p>}




            <label htmlFor="res-occasion">Occasion</label>
            <select
                id="res-occasion"
                value={props.form.occasion}
                required
                onChange={(event) =>
                    props.setForm((prevState) => ({
                        ...prevState,
                        occasion: event.target.value,
                    }))
                }
                aria-label="On Click"
                aria-labelledby="occasion"
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

        </form>
    );
}
