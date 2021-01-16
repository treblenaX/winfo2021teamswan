import React from 'react';
import ReactDOM from 'react-dom';
import CreateProjectPage from './CreateProjectPage';
import Homepage from './Homepage';
import './index.css';
// import App from './App';
// import Homepage from './Homepage';
import ProjectPage from './ProjectPage';
import reportWebVitals from './reportWebVitals';

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
      <Homepage {...demo_timelineTile} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// demo entrypoint: Project Page
function demoProjectPage() {
  ReactDOM.render(
    <React.StrictMode>
      <ProjectPage {...demo_project} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// production entrypoint
function start() {
  ReactDOM.render(
    <React.StrictMode>
      <CreateProjectPage />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// start program
// start();
// demoHomePage();
demoProjectPage();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
