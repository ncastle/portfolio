import React, { useEffect } from 'react';
import '../styles/Work.scss';
import CeresThumb from '../images/CeresGreensThumbnail.png';
import GeoVermonterThumb from '../images/GeoVermonterThumbnail.png';
import YelpingtonThumb from '../images/YelpingtonThumbnail.png';
import RemockThumb from '../images/RemockThumbnail.png';
import TicTacToeThumb from '../images/TicTacToeThumbnail.png';
import GuessTheNumberThumb from '../images/GuessTheNumberThumbnail.png';
import ZorkingtonThumb from '../images/ZorkingtonThumbnail.png';
import Rick from '../images/rick-450.png';


const Project = (props) => {
  console.log({props});

  return (
    <div className='project'>
      <div className='project-bg'>
        <a href={`${props.githubLoc}`}><img src={CeresThumb}
            alt={`thumbnail for ${props.name} project`}/></a>
        <div className='description'>
          <h3>{props.name}</h3>
          <p>
            A dashboard that displays sensor data from an indoor leafy green growing op
          </p>
        </div>
      </div>
    </div>
  );
};

const Work = () => {

  const projectSlideIn = () => {
    const projectsList = document.querySelectorAll('.project');
    const projArr = Array.from(projectsList);

    projArr.forEach((proj, i) => {
      proj.style.animation = `slide-in ease-in-out 1s forwards ${i / 5 + 0.3}s`;
    })
  };

  const fetchProjectInfo = async () => {
    console.log('fetchProjectInfo');
    const projectsResponse = await fetch('api/getProjects');
    console.log({projectsResponse});
    const projects = await projectsResponse.json();

    console.log({projects});
  };

  // slide in projects one time when component loads
  useEffect(() => {
    const loadProjects = async () => {
      console.log('loadProjects');
      await fetchProjectInfo();

      projectSlideIn();
    };
    loadProjects();
  }, []);

  return (
    <div className='Work'>
      <div id='workLeft'>
        <div id='workText'>
          Work
        </div>
        <div id='bg1'></div>
        <img id='rick' src={Rick} alt='Rick Sanchez character'/>
      </div>
      <div className="projects">

        <div className="project">
          <div className="project-bg">
            <a href="https://github.com/ncastle/CeresGreens"><img src={CeresThumb}
                alt="thumbnail for CeresGreens project"/></a>
            <div className='description'>
              <h3>BasilDash</h3>
              <p>
                A dashboard that displays sensor data from an indoor leafy green growing op
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-bg">
            <a href="https://github.com/ncastle/CeresGreens"><img src={GeoVermonterThumb}
                alt="thumbnail for GeoVermonter project"/></a>
            <div className='description'>
              <h3>GeoVermonter</h3>
              <p>
                A geographic guessing game made in React
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-bg">
            <a href="https://github.com/ncastle/CeresGreens"><img src={YelpingtonThumb}
                alt="thumbnail for Yelpington project"/></a>
            <div className='description'>
              <h3>Yelpington</h3>
              <p>
                A Yelp-like application for Burlington, VT
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-bg">
            <a href="https://github.com/BurlingtonCodeAcademy/remock-nick-ray"><img
                src={RemockThumb} alt="thumbnail for remock project"/></a>
            <div className='description'>
              <h3>Remock</h3>
              <p>
                A website built from a mockup image
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-bg">
            <a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-ncastle"><img
                src={TicTacToeThumb} alt="thumbnail for tic tac toe project"/></a>
            <div className='description'>
              <h3>Tic Tac Toe</h3>
              <p>
                A classic Tic Tac Toe game
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-bg">
            <a href="https://github.com/BurlingtonCodeAcademy/zorkington-connor-nick"><img
                src={ZorkingtonThumb} alt="thumbnail for zorkington"/></a>
            <div className='description'>
              <h3>Zorkington</h3>
              <p>
                An implementation of a Zork-like game
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-bg">
            <a href="https://github.com/BurlingtonCodeAcademy/guess-the-number-ncastle"><img
                src={GuessTheNumberThumb} alt="thumbnail for guess the number project"/></a>
            <div className='description'>
              <h3>Guess The Number</h3>
              <p>
                A command line guessing game played with the computer
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

};


export default Work;
