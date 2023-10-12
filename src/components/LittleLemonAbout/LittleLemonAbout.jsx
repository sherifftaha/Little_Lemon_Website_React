import React from 'react'
import './LittleLemonAbout.css'

export default function LittleLemonAbout(props) {
    return (
        <div className={props.classN}>

            <h1 className='ll-header' style={props.headerStyle}>Little Lemon</h1>
            <p className='ll-subtitle' style={props.subtitleStyle}>Chicago</p>
            <p className='ll-about' style={props.aboutStyle}>{props.about}</p>


        </div>
    )
}
