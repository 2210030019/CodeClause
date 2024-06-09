import React, { useState, useEffect } from 'react';
import './bg_Generator.css';

function App() {
  const [color1, setColor1] = useState('#ffffff');
  const [color2, setColor2] = useState('#ffffff');
  const [gradientType, setGradientType] = useState('linear');
  const [gradient, setGradient] = useState('linear-gradient(to right, #ffffff, #ffffff)');

  useEffect(() => {
    const body = document.getElementById('gradient');
    body.style.background = gradient;
  }, [gradient]);

  const setGradientColors = () => {
    let newGradient;
    switch (gradientType) {
      case 'linear':
        newGradient = `linear-gradient(to right, ${color1}, ${color2})`;
        break;
      case 'radial':
        newGradient = `radial-gradient(circle, ${color1}, ${color2})`;
        break;
      case 'conic':
        newGradient = `conic-gradient(from 0deg, ${color1}, ${color2})`;
        break;
      default:
        newGradient = 'linear-gradient(to right, #ff0000, #ffff00)';
    }
    setGradient(newGradient);
  };

  useEffect(() => {
    setGradientColors();
  }, [color1, color2, gradientType]);

  return (
    <div>
      <h1>Background Generator</h1>
      <h2>Choose your Gradient colors:</h2>
      <input 
        type="color" 
        className="input1" 
        value={color1} 
        onChange={e => setColor1(e.target.value)} 
      />
      <input 
        type="color" 
        className="input2" 
        value={color2} 
        onChange={e => setColor2(e.target.value)} 
      />
      <h2>Select Gradient Type</h2>
      <select value={gradientType} onChange={e => setGradientType(e.target.value)}>
        <option value="linear">Linear</option>
        <option value="radial">Radial</option>
        <option value="conic">Conic</option>
      </select>
      <h2>Color Codes</h2>
      <h3>{gradient}</h3>
    </div>
  );
}

export default App;
