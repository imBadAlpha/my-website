import React from 'react'
import {BsGithub, BsLinkedin, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/imBadAlpha" title='Github'><BsGithub /></a>
        <a href="https://www.linkedin.com/in/romeo-nombre-jr-a32835217/" title='LinkedIn'><BsLinkedin /></a>
        <a href="https://www.facebook.com/romesh.junior.93/" title='Facebook'><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials