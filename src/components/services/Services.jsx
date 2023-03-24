import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import useAnimate from '../Animate';

const Services = () => {
  useAnimate(
    (target, isIntersecting) => {
      if (isIntersecting) {
        target.classList.add('show__service__list');
      } 
      else {
        target.classList.remove('show__service__list');
      }
    },
    '.service__list'
  );
  
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {/* UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX  */}
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        {/* CONTENT CREATION*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services