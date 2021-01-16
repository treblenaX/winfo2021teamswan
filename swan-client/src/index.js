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

// demo entrypoint: Homepage
function demoHomePage() {
  ReactDOM.render(
    <React.StrictMode>
      <Homepage items = {demo_timelineTile} />
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
demoHomePage();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
