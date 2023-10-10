import React, { useState } from 'react';

export default function BookingForm(props) {
    const [form, setForm] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    });

    return (
        <div className="bookingform">
            <form
                style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
                aria-labelledby="booking-form-label"
            >

                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    onChange={(event) =>
                        setForm((prevState) => ({ ...prevState, date: event.target.value }))
                    }
                    aria-labelledby="res-date"
                />

                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    onChange={(event) =>
                        setForm((prevState) => ({
                            ...prevState,
                            time: event.target.value,
                        }))
                    }
                    aria-labelledby="res-time"
                >
                    {props.availableTimes.map((time, index) => {
                        return (
                            <option key={index} value={time}>
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
                    onChange={(event) =>
                        setForm((prevState) => ({
                            ...prevState,
                            guests: event.target.value,
                        }))
                    }
                    aria-labelledby="guests"
                />

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    onChange={(event) =>
                        setForm((prevState) => ({
                            ...prevState,
                            occasion: event.target.value,
                        }))
                    }
                    aria-labelledby="occasion"
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <input
                    type="submit"
                    value="Make Your reservation"
                    aria-labelledby="submit-button"
                />
            </form>
        </div>
    );
}
