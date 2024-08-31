import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-2">Thank you</h4>
          <p className="text-gray-600 mb-4">A Fashion landing page using GSAP animation</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <a href="#" className="text-gray-600 hover:text-white mx-2 mb-2 md:mb-0">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-white mx-2 mb-2 md:mb-0">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-white mx-2 mb-2 md:mb-0">Contact Us</a>
        </div>
      </div>
      <div className="text-gray-600 py-4 mt-6">
        <div className="container mx-auto text-center text-white">
          &copy; {new Date().getFullYear()} Designed by Soumyadip Debnath
        </div>
      </div>
    </footer>
  );
};

export default Footer;
