import React from 'react'
import './Rating.css'
export default function Rating(props) {
    return (

        <div className='rating'>

            <p className='rating-rating'>Rating 5/5</p>

            <div className="img-name-txt-flex">

                <div className="rating-img-and-name">

                    <img className='rating-img' src={props.img} alt="rating-img" />
                    <p className='rating-name'>{props.name}</p>

                </div>

                <p className="rating-review-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quam, consectetur perferendis unde alias sint maxime quo totam accusantium rem</p>

            </div>

        </div>

    )
}
