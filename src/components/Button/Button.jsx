import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
export default function Button(props) {
    return (
        <>
        <Link to={props.href} className='btn'>{props.text}</Link>
        </>
    )
}
