import React from 'react'
import img from "../../assets/logos/vertical white.png"
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer-background'>

      <footer className='footer container'>

        <img src={img} alt="" className='footer-img' />

        <div className="footer-ul-lists">

          <ul>
            <li className='footer-li-header'><p href="" >Doormat Navigation</p></li>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Reservations</a></li>
            <li><a href="">Order Online</a></li>
            <li><a href="">Login</a></li>
          </ul>

          <ul>
            <li className='footer-li-header'><p href="" >Contact</p></li>
            <li><a href="">Adress</a></li>
            <li><a href="">Phone Number</a></li>
            <li><a href="">Email</a></li>
          </ul>

          <ul>
            <li className='footer-li-header'><p href="">Social Media Links</p></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">X.com</a></li>
            <li><a href="">LinkedIn</a></li>
          </ul>

        </div>

      </footer>

    </div>
  )
}
