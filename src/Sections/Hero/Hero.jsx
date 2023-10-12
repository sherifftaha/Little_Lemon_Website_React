import React from 'react'
import Button from '../../components/Button/Button'
import './Hero.css'
import image from '../../assets/images/restauranfood.jpg'
import LittleLemonAbout from '../../components/LittleLemonAbout/LittleLemonAbout'

export default function Hero(props) {
  return (
    <div className="hero-background">
      <section className="container hero">

        <div className="hero-txt-and-btn">
          <LittleLemonAbout about='We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.' />
          <Button href='/booking' text='Reserve a Table' />

        </div>

        <div className="hero-img">

          <img src={image} alt="someone hold food" />

        </div>

      </section>

    </div>

  )
}
