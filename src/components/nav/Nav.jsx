import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { MdDesignServices, MdOutlineContactSupport, MdPreview } from 'react-icons/md'
import { useState, useEffect} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          const sectionId = section.getAttribute('id');
          setActiveNav(`#${sectionId}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#header" title='Home' onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" title='About' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" title='Experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" title='Services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices /></a>
      <a href="#portfolio" title='Portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject /></a>
      <a href="#testimonials" title='Testimonials' onClick={() => setActiveNav('#Testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><MdPreview /></a>
      <a href="#contact" title='Contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactSupport /></a>
    </nav>
  )
}

export default Nav