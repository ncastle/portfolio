import React, { useState, useEffect } from 'react';
import '../styles/Work.scss';
import Rick from '../images/rick-450.png';


const Project = (props) => {
  const { project } = props;

  return (
    <div className='project'>
      <div className='project-bg'>
        <a href={`${project.githubLoc}`}><img src={`images/${project.imgName}.png`}
            alt={`thumbnail for ${project.name} project`}/></a>
        <div className='description'>
          <h2>{project.name}</h2>
          <p>
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  // useState hooks
  const [ projectList, setProjectList ] = useState([]);
  const [ loadingProjects, setLoadingProjects ] = useState(true);

  const projectSlideIn = () => {
    const projectsList = document.querySelectorAll('.project');
    const projArr = Array.from(projectsList);

    projArr.forEach((proj, i) => {
      proj.style.animation = `slide-in ease-in-out 1s forwards ${i / 5 + 0.3}s`;
    })
  };

  const fetchProjectInfo = async () => {
    const projectsResponse = await fetch('api/getProjects');
    const projects = await projectsResponse.json();
    return projects;
  };

  // get the project json when the component loads
  useEffect(() => {
    const loadProjects = async () => {
      const projects = await fetchProjectInfo();
      setProjectList(projects);
      setLoadingProjects(false);
    };
    loadProjects();
  }, []);
  
  // slide in projects one time once projects are fetched
  useEffect(() => {
    projectSlideIn();
  }, [loadingProjects]);

  // what the component renders
  return (
    <div className='Work'>

      <div id='workLeft'>
        <div id='workText'>
          Work
        </div>
        <div id='bg1'></div>
        <img id='rick' src={Rick} alt='Rick Sanchez character'/>
      </div>

      {
        projectList.length && !loadingProjects && 
        <div className="projects">
          { 
            projectList.map(proj => (
              <Project project={proj} />
            ))
          };
        </div> /* end .projects div */
      }
    </div>
  );

};


export default Work;
