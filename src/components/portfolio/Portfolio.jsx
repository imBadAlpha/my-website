import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images/portfolio1.jpg'
import IMG2 from '../../assets/images/portfolio2.jpg'
import IMG3 from '../../assets/images/portfolio3.jpg'
import IMG4 from '../../assets/images/portfolio4.jpg'
import IMG5 from '../../assets/images/portfolio5.png'
import IMG6 from '../../assets/images/portfolio6.jpg'

const data = [
  {id: 1, "image": IMG1, title: "Project Alpha", github: "https://github.com", demo: "#"},
  {id: 2, "image": IMG2, title: "Project Beta", github: "https://github.com", demo: "#"},
  {id: 3, "image": IMG3, title: "Project Gamma", github: "https://github.com", demo: "#"},
  {id: 4, "image": IMG4, title: "Project Delta", github: "https://github.com", demo: "#"},
  {id: 5, "image": IMG5, title: "Project Epsilon", github: "https://github.com", demo: "#"},
  {id: 6, "image": IMG6, title: "Project Zeta", github: "https://github.com", demo: "#"}
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' >Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section >
  )
}

export default Portfolio