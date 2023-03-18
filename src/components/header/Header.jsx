import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hey there, I'm</h5>
        <h1>Romeo Nombre Jr.</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
      </div>
    </header>
  )
}

export default Header