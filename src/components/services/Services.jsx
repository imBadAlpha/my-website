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
              <p>Conduct user research to understand user needs and preferences</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Develop user personas to represent your target audience</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Create wireframes and prototypes to visualize and test user interface design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Design user interface elements such as buttons, menus, forms, and icons</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Develop user-friendly navigation structures to enhance user experience</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Apply responsive design principles to ensure the interface works on different devices</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Apply best practices for accessibility and usability to improve the overall user experience</p>
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
              <p>Develop websites using HTML, CSS, and JavaScript frameworks such as React</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Develop and Deploy Full-Stack Web Applications with PHP Laravel Framework</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Implement back-end server-side logic using Node.js and Express</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Develop RESTful APIs to communicate between client and server</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Applying React Front-end with different Back-end Frameworks like PHP Laravel and Python Flask </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Designing and implementing different Auth preferences for accessing role-specific content</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Create and manage databases using MySQL or MySQLite databases</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web App deployment and hosting live service</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Implement third-party APIs such as payment gateways, social media, and geolocation services</p>
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
              <p>Develop content strategy based on audience needs and business goals</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Create written content such as blog posts, articles, and product descriptionsLorem, ipsum dolor sit amet consetreasdfadf</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Develop visual content such as infographics, illustrations, and animations</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Produce video content such as tutorials, explainers, and product demos</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Analyze and measure content performance using analytics tools to improve content strategy and engagement</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services