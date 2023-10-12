import React, { useEffect } from 'react'
import { useState, useReducer } from 'react'
import { fetchAPI, summitAPI } from '../../util/fetch'



//  i want to pass the props from the parent component to the child component
const initializeTimes = (date) => {
    return fetchAPI(date)
}



export default function Main(props) {

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'update':
                return fetchAPI(new Date(action.state))
            default:
                return state
        }
    }
    const [availableTimes, Dispatch] = useReducer(updateTimes, initializeTimes(new Date()))

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