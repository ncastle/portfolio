import React from 'react';
import '../styles/About.scss';
import Headshot from '../images/headshot.jpeg';

function About(props) {
  return (
    <div className='About'>
      <div id='aboutLeft'>
        <div id='aboutText'>
         About
        </div>
        <div id='bg1'></div>
        <img id='headshot' src={Headshot}/>
      </div>
      <div className='aboutDesc'>
        <p>
          I'm a software and web developer living in the Burlington, VT area. I got my start in software development in 2014 when I began my time at the University of Vermont. Here I gained a broad range of knowledge about computer science and software development topics. When I completed my Bachelor's degree at UVM, I decided to take my skills further and enrolled in the Burlington Code Academy (BCA) software development bootcamp, which focuses on web technologies. After completing the bootcamp, I was hired by BCA as a Junior Software Dev and TA, continuing to learn and expand my skillset.
        </p>
      </div>
    </div>
  )
}

export default About;
