import React from 'react';
import '../styles/Main.scss';
import { Link } from 'react-router-dom';

const Main = (props) => {

  return(
    <div className='Main'>
      <div id="links">
      <Link to='./work'>
          <div id='workText'>
            Work
          </div>
        </Link>
        <Link to='./about'>
          <div id='aboutText'>
            About
          </div>
        </Link>
      </div>
      <div className='center'>
        <h1>Nick Castle</h1>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Main;
