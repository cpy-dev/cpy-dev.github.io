import './App.css';
import React from "react";

import NavBar from "./pages/NavBar";
import Logo from "./pages/Logo";
import python from "./svgs/python.svg";
import Project from './pages/Project'

const centralDivStyle = {
    'display' : 'flex',
    'flex-direction' : 'column',
    'justify-content' : 'center',
    'align-items' : 'center'
}

const pStyle = {
    'font-size' : '30px',
    'text-align' : 'center'
}

const recentActivitiesStyle = {
    'display' : 'flex',
    'flex-direction' : 'column',
    'justify-content' : 'center',
    'align-items' : 'center'
}

function App() {
  return (
      <div className="mainDiv">
          <NavBar />
          <div className="centralDiv" style={centralDivStyle}>
              <div>
                  <Logo fontSize="200" color="white" />
              </div>

              <p style={pStyle}>Hi!<br/>My name is Cpy, welcome to my website🙃</p>
          </div>
          <div style={recentActivitiesStyle}>
              <p style={pStyle}>My recent activities:</p>
              <Project
                  name="SQLite-shell"
                  langs={[python]}
                  description="Lightweight cross platform open source GUI SQLite editor"
                  link="https://github.com/cpy-dev/SQLite-shell"
              />
              <Project
                  name="rShell"
                  langs={[python]}
                  description="Remotely access other computer's terminal via TCP connection"
                  link="https://github.com/cpy-dev/rShell"
              />
          </div>
      </div>
  );
}

export default App;
