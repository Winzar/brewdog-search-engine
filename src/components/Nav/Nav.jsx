import React from 'react'
import "./Nav.scss";
import logo from './BrewdogLogo.png'

const Nav = () => {
  return (
    <nav className='nav'>
      <h2 className='nav__heading'>Brewdog Connoisseur</h2>
      <img className='nav__logo' src={logo} alt="brewdog logo" />
    </nav>
  )
}

export default Nav