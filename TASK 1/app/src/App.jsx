import React from 'react';

import Banner from './components/Banner';

import Open from './components/Open';

import Top from './components/Top';
import './App.css';
import TopGrid from './components/TopGrid';
import Design from './components/Design';
import Heels from './components/Heels';
import Vogue from './components/Vogue';
import Indian from './components/Indian';

import Mainvcomp from './components/Mainvcomp';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Open />
      <div className="background">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className='box'></div>
      </div>
      <div>
        <Banner />
        
        <Top />
        <TopGrid />
        <Design />
        <Heels />
        <Indian />
        <Vogue />
        <Mainvcomp />
        <Footer />
      </div>
    </div>
  );
};

export default App;
