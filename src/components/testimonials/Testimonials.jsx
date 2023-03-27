import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/images/avatar1.jpg'
import AVTR2 from '../../assets/images/avatar2.jpg'
import AVTR3 from '../../assets/images/avatar3.jpg'
import AVTR4 from '../../assets/images/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1, 
    name: "Project Alpha",
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  },
  {
    avatar: AVTR2, 
    name: "Project Beta", 
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  },
  {
    avatar: AVTR3, 
    name: "Project Gamma",
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  },
  {
    avatar: AVTR4, 
    name: "Project Delta",
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className='testimonials' key={index}>
                <div className='client__avatar'>
                  <img src={avatar} alt={`Avatar ${index+1}`}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials