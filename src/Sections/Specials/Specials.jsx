import React from 'react'
import Card from '../components/Card'
import { useState } from 'react'
import Button from '../components/Button'
import '../css/Specials.css'
import greekSalad from '../assets/images/greekSaladNew.jpeg'
import bruschetta from '../assets/images/BruschettaNew.jpeg'
import lemonDessert from '../assets/images/lemonDessertNew.jpeg'



export default function Specials() {
  const [cards] = useState([
    { img: greekSalad, title: 'Greek salad', price: '12.99', desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.' },
    { img: bruschetta, title: 'Bruschetta', price: '5.00', desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.' },
    { img: lemonDessert, title: 'Lemon Dessert', price: '5.00', desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.' }
  ])
  return (
    <section className="specials container">

      <div className="specials-title-and-btn">

        <h1 className='specials-title' >This week specials!</h1>
        <Button href='#' text='Online Menu' />

      </div>

      <div className="cards">

        {cards.map((card, index) => {
            return <Card key={index} img={card.img} title={card.title} price={card.price} desc={card.desc} />
        })}

      </div>

    </section>
  )
}
