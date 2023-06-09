import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/images/portfolio1.jpg';
import IMG2 from '../../assets/images/portfolio2.jpg';
import IMG3 from '../../assets/images/portfolio3.jpg';
import IMG4 from '../../assets/images/portfolio4.jpg';
import IMG5 from '../../assets/images/portfolio5.png';
import useAnimate from '../Animate';

const data = [
  {id: 1, "image": IMG1, title: "USTC (Mini-Project)", github: "https://github.com/imBadAlpha/mini-project", demo: "https://imbadalpha.github.io/mini-project/"},
  {id: 2, "image": IMG2, title: "QuikRide (Mini-Project)", github: "https://github.com/imBadAlpha/mini-project-2", demo: "https://imbadalpha.github.io/mini-project-2/"},
  {id: 3, "image": IMG3, title: "Swapp", github: "https://github.com/imBadAlpha/swapp", demo: "https://swapp.fun/"},
  {id: 4, "image": IMG4, title: "Laravel React Demo", github: "https://github.com/imBadAlpha/my-laravel-react-project", demo: "#"},
  {id: 5, "image": IMG5, title: "Public Library Registry", github: "https://github.com/imBadAlpha/flask-react", demo: "#"},
]

const Portfolio = () => {
  useAnimate(
    (target, isIntersecting) => {
      if (isIntersecting) {
        target.classList.add('show__portfolio__item');
      } 
      else {
        target.classList.remove('show__portfolio__item');
      }
    },
    '.portfolio__item'
  );

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            const showDemoButton = demo !== "#";
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {
                    showDemoButton ? (
                      <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    ) : (
                      <div className='btn btn-primary disabled btn-danger'>Not Yet Available</div>
                    )
                  }
                </div>
              </article>
            )
          })
        }
      </div>

    </section >
  )
}

export default Portfolio;
