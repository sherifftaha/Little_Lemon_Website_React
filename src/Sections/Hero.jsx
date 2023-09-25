import React from 'react'
import Button from '../components/Button'
import '../css/Hero.css'
import image from '../assets/images/restauranfood.jpg'
import LittleLemonAbout from '../components/LittleLemonAbout'

export default function Hero() {
  return (
    <div className="hero-background">

      <div className="container hero">

        <div className="hero-txt-and-btn">
          <LittleLemonAbout about='We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.' />
          <Button href='#' text='Reserve a Table' />

        </div>

        <div className="hero-img">

          <img src={image} alt="someone hold food" />

        </div>

      </div>

    </div>

  )
}
