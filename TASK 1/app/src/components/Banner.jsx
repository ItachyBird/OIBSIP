import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Banner.css';

const Banner = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    // Initial state of boxes (optional)
    gsap.set('.box1, .box2, .box3, .box4, .box5, .box6, .box7,headline', { y: 0, opacity: 0 });

    // Set a timeout to start the animation after 5 seconds
    const animationTimeout = setTimeout(() => {
      timeline
        .fromTo('.box1', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo('.box2', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
        .fromTo('.box3', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
        .fromTo('.box4', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
        .fromTo('.box5', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
        .fromTo('.box6', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
        .fromTo('.box7', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
        .fromTo('.box1 .text', { opacity: 0 }, { opacity: 1, duration: 0.5 })
        .fromTo('.box2 .text', { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.4")
        .fromTo('.box3 .text', { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.4")
        .fromTo('.box4 .text', { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.4")
        .fromTo('.box5 .text', { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.4")
        .fromTo('.box6 .text', { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.4")
        .fromTo('.box7 .text', { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.4")
        .fromTo('.headline', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");
        

    }, 1100); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(animationTimeout); // Clean up timeout on component unmount
  }, []);

  return (
    <div className='wrap'>
    <div className='banner-container'>
      <div className='box1'><div className="text">F</div></div>
      <div className='box2'><div className="text">A</div></div>
      <div className='box3'><div className="text">S</div></div>
      <div className='box4'><div className="text">H</div></div>
      <div className='box5'><div className="text">I</div></div>
      <div className='box6'><div className="text">O</div></div>
      <div className='box7'><div className="text">N</div></div>
    </div>
    <div className='headline'>
  Discover Your <span className='orange'>Style</span>, Embrace Your <span className='highlight'>Glow</span>
</div>

    </div>
  );
};



export default Banner;
