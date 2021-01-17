import React from 'react';
import ReactDOM from 'react-dom';
import CreateProjectPage from './pages/CreateProjectPage';
import Homepage from './pages/Homepage';
import './index.css';
// import App from './App';
// import Homepage from './Homepage';
import ProjectPage from './pages/ProjectPage';
import reportWebVitals from './reportWebVitals';
import {getProjectById} from './api/Project';
import { getPhotoById } from './api/Photo';
// demo object: timeline tile
const demo_timelineTile = 
  [
    {
      title: "Timeline Tile Title 0",
      authorId: 12345,
      dateTime: "1.1.1",
      projectId: 12345,
      content: "Tile Content Tile Content Tile Content",
    },
    {
      title: "Timeline Tile Title 1",
      authorId: 12345,
      dateTime: "1.1.1",
      projectId: 12345,
      content: "Tile Content Tile Content Tile Content",
    },
    {
      title: "Timeline Tile Title 2",
      authorId: 12345,
      dateTime: "1.1.1",
      projectId: 12345,
      content: "Tile Content Tile Content Tile Content",
    },
  ];

// demo object: project
const demo_project = {
  title: "Sample Project",
  projectId: 101,
  ownerId: "wenjalan",
  volunteerIds: ["elbertkcheng", "helen.li", "morticus"],
  thumbnailUrl: "https://cdn.discordapp.com/attachments/796478136866963477/799822410945396786/unknown.png",
  githubUrl: "https://github.com/treblenaX/winfo2021teamswan",
  description: "Agora is a project platform for organizations and developers to promote their work and recruit new members",
  acceptingVolunteers: true,
  timeline: [],
}

// demo entrypoint: Homepage
function demoHomePage() {
  ReactDOM.render(
    <React.StrictMode>
      <Homepage items = {demo_timelineTile} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// demo entrypoint: Project Page
async function demoProjectPage() {
  console.log('Loading demo Project Page');
  const starbotProjectId = "6003c83801238d6c2efac8e7";
  const project = {
    project: await getProjectById(starbotProjectId),
    image: "http://localhost:3001/api/photos/get/6003c7b901238d6c2efac8e3"
  };
  
  ReactDOM.render(
    <React.StrictMode>
      <ProjectPage {...project} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// demo entrypoint: Create Project Page
function demoCreateProject() {
  ReactDOM.render(
    <React.StrictMode>
      <CreateProjectPage />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// production entrypoint
function start() {
  ReactDOM.render(
    <React.StrictMode>
      <Homepage />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// start program
// start();
// demoHomePage();
demoProjectPage();
// demoCreateProject();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
