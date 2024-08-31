import React, { useEffect, useRef } from 'react';
import './Design.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import real from '../assets/photos/real.jpeg';
import design from '../assets/photos/design.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Design = () => {
  const photoRef = useRef(null);
  const newImgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(newImgRef.current, 
      { x: '100%' }, 
      { 
        x: '0%',
        scrollTrigger: {
          trigger: photoRef.current,
          start: 'top 20%', 
          end: 'bottom 80%', 
          scrub: true,
         
        }
      }
    );
  }, []);

  return (
    <div className='designwrap'>
      <div className='photo' ref={photoRef}>
        <img src={design} alt="Scrolling Image" className='image-to-scroll' />
        <img src={real} alt="New Scrolling Image" className='image-to-scroll new-image' ref={newImgRef} />
      </div><div className='whiteline'></div>
      <div className='about'>
        <h1>From Concept to Reality</h1>
        <p>See the journey from inspiration to creation. Our design process starts with a vision and a detailed blueprint, bringing innovative fashion ideas to life. Explore our exclusive dress designs and witness the craftsmanship that goes into every piece.</p>
      </div>
    </div>
  );
}

export default Design;
