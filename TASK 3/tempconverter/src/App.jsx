import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Red from '../public/models/Red'; // Import your 3D model component
import './App.css';

function App() {
  const [temperature, setTemperature] = useState('');
  const [inputScale, setInputScale] = useState('Celsius');
  const [outputScale, setOutputScale] = useState('Fahrenheit');
  const [convertedTemperature, setConvertedTemperature] = useState('');

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleInputScaleChange = (e) => {
    setInputScale(e.target.value);
  };

  const handleOutputScaleChange = (e) => {
    setOutputScale(e.target.value);
  };

  const handleConvert = () => {
    let temp = parseFloat(temperature);
    if (isNaN(temp)) {
      setConvertedTemperature('Invalid input!');
      return;
    }

    let converted;
    if (inputScale === outputScale) {
      converted = temp;
    } else if (inputScale === 'Celsius' && outputScale === 'Fahrenheit') {
      converted = (temp * 9/5) + 32;
    } else if (inputScale === 'Celsius' && outputScale === 'Kelvin') {
      converted = temp + 273.15;
    } else if (inputScale === 'Fahrenheit' && outputScale === 'Celsius') {
      converted = (temp - 32) * 5/9;
    } else if (inputScale === 'Fahrenheit' && outputScale === 'Kelvin') {
      converted = (temp - 32) * 5/9 + 273.15;
    } else if (inputScale === 'Kelvin' && outputScale === 'Celsius') {
      converted = temp - 273.15;
    } else if (inputScale === 'Kelvin' && outputScale === 'Fahrenheit') {
      converted = (temp - 273.15) * 9/5 + 32;
    }

    setConvertedTemperature(`${converted.toFixed(2)} °${outputScale[0]}`);
  };

  return (
    <div className="app-container">
      <div className="info-card">
        <h2>Temperature Converter</h2>
        <input 
          type="text" 
          value={temperature} 
          onChange={handleTemperatureChange} 
          placeholder="Enter temperature"
        />
        <div className="scale-options">
          <h3>Input Scale</h3>
          <label>
            <input 
              type="radio" 
              value="Celsius" 
              checked={inputScale === 'Celsius'} 
              onChange={handleInputScaleChange}
            />
            Celsius
          </label>
          <label>
            <input 
              type="radio" 
              value="Fahrenheit" 
              checked={inputScale === 'Fahrenheit'} 
              onChange={handleInputScaleChange}
            />
            Fahrenheit
          </label>
          <label>
            <input 
              type="radio" 
              value="Kelvin" 
              checked={inputScale === 'Kelvin'} 
              onChange={handleInputScaleChange}
            />
            Kelvin
          </label>
        </div>
        <div className="scale-options">
          <h3>Convert To</h3>
          <label>
            <input 
              type="radio" 
              value="Celsius" 
              checked={outputScale === 'Celsius'} 
              onChange={handleOutputScaleChange}
            />
            Celsius
          </label>
          <label>
            <input 
              type="radio" 
              value="Fahrenheit" 
              checked={outputScale === 'Fahrenheit'} 
              onChange={handleOutputScaleChange}
            />
            Fahrenheit
          </label>
          <label>
            <input 
              type="radio" 
              value="Kelvin" 
              checked={outputScale === 'Kelvin'} 
              onChange={handleOutputScaleChange}
            />
            Kelvin
          </label>
        </div>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <div className="result-container">
        {convertedTemperature && <p>Converted to:  {convertedTemperature}</p>}
      </div>








      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Red />  {/* Center the model */}
          <OrbitControls 
            enableZoom={true} 
            enablePan={false}  // Disable panning
          />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
