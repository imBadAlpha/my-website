import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images/portfolio1.jpg'
import IMG2 from '../../assets/images/portfolio2.jpg'
import IMG3 from '../../assets/images/portfolio3.jpg'
import IMG4 from '../../assets/images/portfolio4.jpg'
import IMG5 from '../../assets/images/portfolio5.png'
import IMG6 from '../../assets/images/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item here</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/imBadAlpha" className='btn' >Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item here</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/imBadAlpha" className='btn' >Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item here</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/imBadAlpha" className='btn' >Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item here</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/imBadAlpha" className='btn' >Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item here</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/imBadAlpha" className='btn' >Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item here</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/imBadAlpha" className='btn' >Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>

    </section >
  )
}

export default Portfolio