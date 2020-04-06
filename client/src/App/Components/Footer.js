import React from 'react';
import '../styles/Footer.scss'

function Footer() {

  return (
    <div className='Footer'>
      <ul>
        <li onClick={()=>{window.location.href='https://github.com/ncastle'}}>GitHub</li>
        <li onClick={()=>{window.location.href='https://www.linkedin.com/in/nickjcastle/'}}>LinkedIn</li>
      </ul>
    </div>
  )
}

export default Footer;
