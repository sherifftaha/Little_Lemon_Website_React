import React from 'react'
import '../css/Button.css'
export default function Button(props) {
    return (
        <>
        <a href={props.href} className='btn'>{props.text}</a>
        </>
    )
}
