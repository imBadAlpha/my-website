import React from 'react'
import {BsGithub, BsLinkedin, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href=""><BsGithub /></a>
        <a href=""><BsLinkedin /></a>
        <a href=""><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials