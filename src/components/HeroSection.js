import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className="hero-image" src='images/img-home.jpg' alt="heroimage"/>
      <h1 className="hero-h1">Taste Flavor</h1>
      <p>Our loaves are hand-crafted daily in a variety flavors, shapes,<br></br> and
sizes. The entire production process occurs on-site from the hand<br></br>
shaping and the slow rising of the bread that gives it its amazing<br></br>
characteristic depth of flavor, to the exact moment, when it comes<br></br>
out of our specialty Sri-lankan stone-hearth oven.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CHOOSE YOUR LOAF
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;