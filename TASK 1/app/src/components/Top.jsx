import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Top.css';


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const boxRef = useRef(null);
  const innerBoxRef = useRef(null);
  const textcont = useRef(null);
  const picinfoRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 599px)');
    const isMobile = mediaQuery.matches;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: isMobile ? 'top 50%' : 'top 60%',
        end: isMobile ? 'bottom 80%' : 'bottom bottom',
        scrub: true,
        markers: false, // Optional: Disable markers for production
      }
    });
  
    tl.fromTo(boxRef.current, 
      { rotation: 0 }, 
      { 
        rotation: isMobile ? -45 : -90, 
        duration: 5, 
        ease: 'power1.out',
        force3D: true // Enable hardware acceleration
      }
    );
  
    tl.to(innerBoxRef.current, {
      y: isMobile ? '60vw' : '120vw',
      duration: 1,
      ease: 'power1.out',
      delay: 0.5,
      force3D: true // Enable hardware acceleration
    });
  
    tl.fromTo(textcont.current, 
      { opacity: 0, y: 0 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power4.out',
        delay: 0.5,
        force3D: true // Enable hardware acceleration
      },
      '+=10'
    );
  
  }, []);
  

 

  return (
    <div>
      <div className='container'>
        <div className='Toporangebox' ref={boxRef}>
          <div className='Toporangeboxmove' ref={innerBoxRef}></div>
        </div>
        <div className='textbox' ref={textcont}> Worried About Your Looks?<br /> We've Got Your Back!</div>
      </div>

    </div>
  );
}

export default Hero;
