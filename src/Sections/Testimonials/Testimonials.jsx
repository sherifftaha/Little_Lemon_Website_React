import React from 'react'
import { useState } from 'react'
import Rating from '../../components/Rating/Rating'
import './Testimonials.css'
import ahmedImg from '../../assets/images/ahmed.jpeg'
import aliImg from '../../assets/images/Ali.jpeg'
import saadImg from '../../assets/images/saad.jpeg'
import samehImg from '../../assets/images/sameh.jpeg'




export default function Testimonials() {

  const [ratings, setRatings] = useState([
    { name: 'Ahmed', img: ahmedImg },
    { name: 'Ali', img: aliImg },
    { name: 'Saad', img: saadImg },
    { name: 'Sameh', img: samehImg },
  ])
  return (
    <div className="testimonials-background">

      <section className='testimonials container'>

        <h1 className='testimonials-title'>Testimonials</h1>

        <div className="testimonials-ratings">

          {ratings.map((rating, index) => {
            return (
              <Rating key={index} name={rating.name} img={rating.img} />
            )
          }
          )}

        </div>

      </section>
    </div>

  )
}
