import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.scss';

function Header() {

  return(
    <div className='Header'>
        <div className='navLinks'>
          <Link id='home' to={'/'}>Home</Link>
          <Link id='main' to={'/main'}>Main</Link>
          <Link id='work' to={'/work'}>Work</Link>
          <Link id='about' to={'/about'}>About</Link>
        </div>
        <div id='brand'>
          NCDev
        </div>
    </div>
  )
}

export default Header;
