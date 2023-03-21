import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/me.png'
import HeaderSocials from './HeaderSocials'
import useAnimate from '../Animate';

const Header = () => {
  useAnimate(
    (target, isIntersecting) => {
      if (isIntersecting) {
        target.classList.add('show__container');
      } 
      // else {
      //   target.classList.remove('show__container');
      // }
    },
    '.container'
  );

  useAnimate(
    (target, isIntersecting) => {
      if (isIntersecting) {
        target.classList.add('show__me');
      } 
      else {
        target.classList.remove('show__me');
      }
    },
    '.me'
  );

  return (
    <header>
      <div className='container header__container'>
        <h5>Hey there, I'm</h5>
        <h1>Romeo Nombre Jr.</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="My Image" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header