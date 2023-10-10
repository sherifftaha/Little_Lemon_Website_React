import React from 'react'
import { useState, useReducer } from 'react'




//  i want to pass the props from the parent component to the child component
const initializeTimes = () => {
    // fetch the times from the database
    const date = new Date()
    const intialTimes = fetchAPI(date);
    // return the times
    return intialTimes
}

const updateTimes = (state, action) => {
    switch (action.type) {
        default:
            console.log(action.state)
    }
}

export default function Main(props) {

    const [availableTimes, Dispatch] = useReducer(updateTimes, initializeTimes())
    return (
        <main>
            {React.Children.map(props.children, child => {
                if (child.type.name == "BookingForm") {
                    return React.cloneElement(child, { availableTimes: availableTimes, Dispatch: Dispatch })
                }
                else {
                    return child
                }
            })}
        </main>
    )
}