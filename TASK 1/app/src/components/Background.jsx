import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const BackgroundAnimation = () => {
  useEffect(() => {
    const balls = document.querySelectorAll('.ball');
    
    gsap.to(balls, {
      duration: 5,
      scale: 1.5,
      rotate: 360,
      x: 'random(-200, 200)', // Random x movement between -200 and 200
      y: 'random(-200, 200)', // Random y movement between -200 and 200
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="background-animation">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="ball"></div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
