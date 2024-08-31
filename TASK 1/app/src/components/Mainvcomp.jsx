import React, { useState } from 'react';
import { gsap } from 'gsap';
import './vcomp.css';

import '@fortawesome/fontawesome-free/css/all.min.css';


import img1 from '../assets/photos/f1.jpg';
import img2 from '../assets/photos/f2.jpg';
import img3 from '../assets/photos/f3.jpg';
import img4 from '../assets/photos/f4.jpg';
import img5 from '../assets/photos/f5.jpg';
import img6 from '../assets/photos/f6.jpg';
import img7 from '../assets/photos/f7.jpg';
import img8 from '../assets/photos/f8.jpg';
import img9 from '../assets/photos/f9.jpg';
import img10 from '../assets/photos/f10.jpg';
import img11 from '../assets/photos/f11.jpg';
import img12 from '../assets/photos/f12.jpg';
import img13 from '../assets/photos/f13.jpg';
import img14 from '../assets/photos/f14.jpg';
import img15 from '../assets/photos/f15.jpg';
import img16 from '../assets/photos/f16.jpg';
import img17 from '../assets/photos/f17.jpg';
import img18 from '../assets/photos/f18.jpg';
import img19 from '../assets/photos/f19.jpg';
import img20 from '../assets/photos/f20.jpg';
import img21 from '../assets/photos/f21.jpg';
import img22 from '../assets/photos/f22.jpg';
import img23 from '../assets/photos/f23.jpg';
import img24 from '../assets/photos/f24.jpg';



const Mainvcomp = () => {
  
  
  const images = {
    vpic1: [img1, img2, img3,img4, img5, img6],
    vpic2: [img7, img8, img9,img10, img11, img12],
    vpic3: [img13, img14, img15,img16, img17, img18],
    vpic4: [img19, img20, img21,img22, img23, img24],
  };

  // State to hold current image index for each vpic div
  const [currentImages, setCurrentImages] = useState({
    vpic1: 0,
    vpic2: 0,
    vpic3: 0,
    vpic4: 0,
  });

  // Function to handle image change
  const changeImage = (vpicKey) => {
    setCurrentImages(prev => {
      const newIndex = (prev[vpicKey] + 1) % images[vpicKey].length;
      const newImages = { ...prev, [vpicKey]: newIndex };

      // GSAP animation to fade out and in the image
      gsap.to(`.${vpicKey} img`, { opacity: 0, duration: 0.5, onComplete: () => {
        gsap.set(`.${vpicKey} img`, { opacity: 1, backgroundImage: `url(${images[vpicKey][newIndex]})` });
      }});
      return newImages;
    });
  };

  return (
    <div>
      <div className='mainvcomptext'>Explore the Essence of High Fashion<br /><span  className='df' >Where Every Design Tells a Story.</span> <br /><span className='check'>check out few of our best works ! please click on the image to proceed !</span></div>
      <div className='vwrap'>
        <div className='vtext1'> <h1>Masterpieces of Design</h1>
        <p>Dive into the world of cutting-edge fashion with designs that push the boundaries of creativity. From stunning silhouettes to intricate detailing, these pieces represent the pinnacle of high fashion and artistry. Each creation is a testament to the designer's skill and imagination, setting trends and captivating with its sheer elegance.</p></div>
        <div className='vpic2'>
          <img src={images.vpic2[currentImages.vpic2]} alt="vpic2" />
          <button className='vpic-button' onClick={() => changeImage('vpic2')}>
          <i className="fas fa-arrow-right"></i></button>
        </div>

        
        <div className='vtext2'><h1>Luminous Innovations</h1>
        <p>Explore fashion that lights up the night with a blend of technology and style. These garments incorporate innovative lighting elements and glowing accents, transforming everyday wear into spectacular displays. Perfect for making a statement, they merge functionality with a dazzling aesthetic for those who love to stand out.</p></div>
       
        <div className='vpic1'>
          <img src={images.vpic1[currentImages.vpic1]} alt="vpic1" />
          <button className='vpic-button' onClick={() => changeImage('vpic1')}> <i className="fas fa-arrow-right"></i></button>
        </div>
       
        <div className='vtext3'><h1>Boldly Unconventional</h1>
        <p>Celebrate fashion that defies norms and breaks the mold. These pieces are designed for those who embrace the extraordinary and seek unique expressions of style. Expect the unexpected with daring designs that challenge conventions and offer a fresh perspective on modern couture.
        </p></div>
        <div className='vpic3'>
          <img src={images.vpic3[currentImages.vpic3]} alt="vpic3" />
          <button className='vpic-button' onClick={() => changeImage('vpic3')}> <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className='vtext4'><h1>Effortless Chic</h1>
        <p>Discover a collection that redefines casual wear with an air of sophistication. These designs blend comfort with elegance, offering stylish yet relaxed outfits perfect for any occasion. Embrace versatile pieces that seamlessly transition from day to night, making fashion effortlessly chic for every woman.</p></div>

        <div className='vpic4'>
          <img src={images.vpic4[currentImages.vpic4]} alt="vpic4" />
          <button className='vpic-button' onClick={() => changeImage('vpic4')}><i className="fas fa-arrow-right"></i></button>
        </div>
      </div>
      <div className='vwl'></div>
    </div>
  );
}

export default Mainvcomp;
