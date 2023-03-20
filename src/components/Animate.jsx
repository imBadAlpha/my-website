import { useEffect } from 'react';

const Animate = (callback, selector) => {
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target, true);
          } else {
            callback(entry.target, false);
          }
        });
      });
  
      const containerElements = document.querySelectorAll(selector);
      containerElements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, [callback, selector]);
};

export default Animate;