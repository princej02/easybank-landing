import { useState } from 'react'
import images from '../../constants/images'
import { icon } from '../../constants/images'
import { Button } from '../index'
import './NavBar.css'

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="app__navbar flex__center section__padding">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-menu">
        <li className="app__navbar-menu-link">
          <a href="#home">Home</a>
        </li>
        <li className="app__navbar-menu-link">
          <a href="#about">About</a>
        </li>
        <li className="app__navbar-menu-link">
          <a href="#contact">Contact</a>
        </li>
        <li className="app__navbar-menu-link">
          <a href="#blog">Blog</a>
        </li>
        <li className="app__navbar-menu-link">
          <a href="#careers">Careers</a>
        </li>
      </ul>
      <div className="app__navbar-menu-btn">
        <Button />
      </div>
      <div className="app__navbar-hamburger">
        <button onClick={() => setOpen(!open)}>
          {open ? (<img src={icon.close} alt='close'/>) : (<img src={icon.hamburger} alt="hamburger" />)}
        </button>
      </div>
    </nav>
    {open && (
      <div className="app__navbar-hamburger_menu">
        <div className="hamburger_menu-box">
          <ul className="hamburger_menu-box-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
      </div>
    )}
    </>
  )
}

export default NavBar