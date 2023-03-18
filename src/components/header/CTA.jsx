import React from 'react'
import CV from '../../assets/docs/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="#contact" className='btn btn-primary'>Contact</a>
        <a href={CV} download className='btn'>Download My CV</a>
    </div>
  )
}

export default CTA