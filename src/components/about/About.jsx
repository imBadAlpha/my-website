import React from 'react'
import './about.css'
import ME from '../../assets/images/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import useAnimate from '../Animate';

const About = () => {
  useAnimate(
    (target, isIntersecting) => {
      if (isIntersecting) {
        target.classList.add('show__about__card');
      } else {
        target.classList.remove('show__about__card');
      }
    },
    '.about__card'
  );
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years in Customer Service</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Communication</h5>
              <small>Excellent Communication Skills in English</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>6 Completed Projects</small>
            </article>
          </div>
          <p>
            Hey there! I hope you had a wonderful time visiting my site. I have been a passionate programmer
            ever since my high school days but unfortunately never had a chance or decided to turn this into a 
            career back then. Not until recently. I've been spending the last 3 years knowing what there is to web development
            and programming in general, and now I can finally say that I'm ready to be hired. In regards to the specifics
            of my technical skills, feel free to look around below. Hoping to work with you soon!
          </p>
        </div>
      </div>
      
    </section>
  )
} 

export default About