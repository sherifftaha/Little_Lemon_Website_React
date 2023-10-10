import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Nav.css'
import image from '../assets/logos/horizontal yellow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Nav() {
  return (
    <header>
      <nav className='nav container' >
        <Link to="/"><img src={image} alt='Little Lemon Logo' /></Link>
        <input type='checkbox' id='nav-toggle' className='nav-toggle' />
        <label htmlFor="nav-toggle" className='nav-toggle'><FontAwesomeIcon icon={faBars}/></label>
        <div className='navbar-list-container'>
          <ul className='navbar-list'>
            <li className='navbar-list-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='navbar-list-item'>
              <Link to='/'>About</Link>
            </li>
            <li className='navbar-list-item'>
              <Link to='/'>Menu</Link>
            </li>
            <li className='navbar-list-item'>
              <Link to='/booking'>Reservations</Link>
            </li>
            <li className='navbar-list-item'>
              <Link to='/'>Order Online</Link>
            </li>
            <li className='navbar-list-item'>
              <Link to='/'>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
