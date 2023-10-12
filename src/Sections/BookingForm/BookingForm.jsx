import React, { useState, useEffect } from 'react';


export default function BookingForm(props) {

    useEffect(() => {
        props.Dispatch({ type: 'update', state: props.form.date})
        // console.log(props.form.date);
    }
    , [props.form.date])

    return (
        <div className="bookingform">
            <form
                style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
                aria-labelledby="booking-form-label"
                data-testid="booking-form"
                // onSubmit={props.onSubmit}
            >

                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    aria-labelledby="res-date"
                    data-testid="date"
                    value={props.form.date}
                    onChange={(event) => {
                        props.setForm((prevState) => {return { ...prevState, date: event.target.value }});
                    }
                    }
                />
                {/* <h2>{form.date}</h2> */}

                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={props.form.time}
                    onChange={(event) =>
                        props.setForm((prevState) => ({
                            ...prevState,
                            time: event.target.value,
                        }))
                    }
                    aria-labelledby="res-time"
                >
                    {props.availableTimes.map((time, index) => {
                        return (
                            <option key={index} value={time} data-testid="time">
                                {time}
                            </option>
                        );
                    })}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={props.form.guests}
                    onChange={(event) =>
                        props.setForm((prevState) => ({
                            ...prevState,
                            guests: event.target.value,
                        }))
                    }
                    aria-labelledby="guests"
                />

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={props.form.occasion}
                    onChange={(event) =>
                        props.setForm((prevState) => ({
                            ...prevState,
                            occasion: event.target.value,
                        }))
                    }
                    aria-labelledby="occasion"
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

            </form>
        </div>
    );
}
