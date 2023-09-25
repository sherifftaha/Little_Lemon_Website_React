import React from 'react'
import '../css/Nav.css'
import image from '../assets/logos/horizontal yellow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Nav() {
  return (
    <header>
      <nav className='nav container' >
        <a href="#"><img src={image} alt='Little Lemon Logo' /></a>
        <input type='checkbox' id='nav-toggle' className='nav-toggle' />
        <label htmlFor="nav-toggle" className='nav-toggle'><FontAwesomeIcon icon={faBars}/></label>
        <div className='navbar-list-container'>
          <ul className='navbar-list'>
            <li className='navbar-list-item'>
              <a href='#'>Home</a>
            </li>
            <li className='navbar-list-item'>
              <a href='#'>About</a>
            </li>
            <li className='navbar-list-item'>
              <a href='#'>Menu</a>
            </li>
            <li className='navbar-list-item'>
              <a href='#'>Reservations</a>
            </li>
            <li className='navbar-list-item'>
              <a href='#'>Order Online</a>
            </li>
            <li className='navbar-list-item'>
              <a href='#'>Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
