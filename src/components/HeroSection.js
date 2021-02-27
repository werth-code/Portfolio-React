import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Button.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/Users/m21/dev/portfolio/src/video-1.mp4' autoPlay loop muted />
      <h1>MATTHEW WERTH</h1>
      <p>DEVELOPER / PHOTOGRAPHER</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          RECENT WORK
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;