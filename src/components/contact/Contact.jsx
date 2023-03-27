import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from  'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    const lastSentTime = localStorage.getItem('lastSentTime');
    const currentTime = new Date().getTime();
  
    if (lastSentTime && currentTime - lastSentTime < 3 * 60 * 1000) {
      const timeLeft = 3 * 60 * 1000 - (currentTime - lastSentTime);
      const minutesLeft = Math.floor(timeLeft / 60000);
      const secondsLeft = Math.floor((timeLeft - minutesLeft * 60000) / 1000);
    
      const notification = document.querySelector('.form__notification');
      notification.textContent = `You can only send a message every 3 minutes. Please wait for ${minutesLeft}m ${secondsLeft}s before trying again.`;
      notification.style.display = 'block';
    
      setTimeout(() => {
        notification.style.display = 'none';
      }, 5000);
      return;
    }    
    
    emailjs.sendForm('service_47spwdr', 'template_akur56g', form.current, 'RPXfCBv4ChtUFbFhd')
      .then((result) => {
        console.log(result.text);
        const notification = document.querySelector('.form__notification');
        notification.textContent = 'Message sent successfully!';
        notification.style.display = 'block';
        setTimeout(() => {
          notification.style.display = 'none';
        }, 5000);
        localStorage.setItem('lastSentTime', currentTime);
      }, (error) => {
        console.log(error.text);
        const notification = document.querySelector('.form__notification');
        notification.textContent = `There was an error: ${error.text}`;
        notification.style.display = 'block';
        setTimeout(() => {
          notification.style.display = 'none';
        }, 5000);
      });
    
    e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>romeonombrejr@gmail.com</h5>
            <a href="mailto:romeonombrejr@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Romeo Nombre Jr.</h5>
            <a href="https://m.me/romesh.junior.93" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Romeo Nombre Jr.</h5>
            <a href="https://www.linkedin.com/in/romeo-nombre-jr-a32835217" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <div className='form__notification'>
          </div>
        </form>
        
      </div>
    </section>
  )
}

export default Contact