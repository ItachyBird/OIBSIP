import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Heels.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


gsap.registerPlugin(ScrollTrigger);

const Heels = () => {
  useEffect(() => {
    // Animation for blackbox elements
    gsap.fromTo(
      '.blackbox',
      { opacity: 0, x: -200 }, // Start off-screen to the left
      {
        opacity: 1,
        x: 0, // End position
        duration: 1,
        stagger: 0.5, // Delay between each element's animation
        scrollTrigger: {
          trigger: '.heelbox',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      }
    );

    // Animation for title and description
    gsap.fromTo(
      '.title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.heeltext',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.description',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.heeltext',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      }
    );

    // Animation for heelpic
    gsap.fromTo(
      '.heelpic',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.heelpic',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div  style={{background: 'white',display: 'flex',flexDirection: 'column'}}>
    <div className="heels-page">
      <div className='heelbox'>
        <div className='blackbox' style={{ backgroundColor: '#000000' }}></div>
        <div className='blackbox' style={{ backgroundColor: '#242424' }}></div>
        <div className='blackbox' style={{ backgroundColor: '#535353' }}></div>
      </div>
      <div className='heeltext'>
        <h1 className="title">Step Up Your Style Game!</h1>
        <p className="description">
          Discover the perfect pair to elevate your look! From chic heels to trendy sneakers, our collection is designed to make every step you take stylish and confident. Whether you're dressing up for a special occasion or looking for everyday comfort, we've got you covered. Explore our range and find your new favorite footwear today!
        </p>
      </div>
      <div className="heelpic">
        {/* Add content or image here */}
      </div>
    </div> <div className="justpic-container">
<div className='justpic'></div>
<div className='icon'><span><b>Contact Us</b></span><i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-email"></i>
          <i className="fas fa-envelope"></i>
          </div></div>

    </div>
  );
};

export default Heels;
