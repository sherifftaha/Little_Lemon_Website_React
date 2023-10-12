import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
export default function Card(props) {
    return (
        <div className='card' style={{margin:props.margin}}>

            <img src={props.img} alt="" className='card-img' />

            <div className="card-info">

                <div className="card-name-and-price">

                    <h3 className='card-title'>{props.title}</h3>
                    <p className='card-price'>${props.price}</p>

                </div>

                <p className='card-description'>{props.desc}</p>

                <a href='#' className='card-order-now'>Order a delivery <span><FontAwesomeIcon icon={faRocket} /></span> </a>

            </div>

        </div>
    )
}
