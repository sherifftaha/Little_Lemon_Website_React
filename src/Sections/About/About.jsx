import React from 'react'
import './About.css'
import LittleLemonAbout from '../../components/LittleLemonAbout/LittleLemonAbout'
import img from '../../assets/images/aboutImg.png'

export default function About() {
  return (

    <section className='about-background'>

      <div className="about container">
        <LittleLemonAbout classN='about-txt'
          about='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
          headerStyle={{ color: "#333" }}
          subtitleStyle={{ color: "#333" }}
          aboutStyle={{ color: "black" }}
        />

        <img src={img} alt=""  className='about-img'/>

      </div>

    </section>
  )
}
