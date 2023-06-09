import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Romeo Nombre Jr.</a>
      <ul className='permalinks'>
        <li><a href="#header">Header</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/romesh.junior.93/"><FaFacebookF /></a>
        <a href="https://www.instagram.com/nombrejr.romeo/"><FiInstagram /></a>
        <a href="https://twitter.com/alpharomeo101"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Romeo Nombre Jr. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer