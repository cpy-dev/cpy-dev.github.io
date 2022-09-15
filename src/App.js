import './App.css';
import React from "react";

import NavBar from "./sharedCode/NavBar";
import Logo from "./sharedCode/Logo";
import python from "./sharedCode/svgs/python.svg";
import Project from './sharedCode/Project'
import flutter from './sharedCode/svgs/flutter.svg'
import dart from './sharedCode/svgs/dart.svg'
import android from './sharedCode/svgs/android.svg'

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

const logoDivStyle = {
    'margin-left' : '-20px'
}

const contactsDiv = {

}

const contactP = {
    'color' : 'whitesmoke',
    'text-align' : 'center',
    'margin' : '5px',
    'font-size' : '15px'
}

const contactA = {
    'color' : 'whitesmoke'
}

const contactsTopDiv = {
    'display' : 'flex',
    'flex-direction' : 'row',
    'justify-content' : 'center'
}

function App() {
  return (
      <div className="mainDiv">
          <NavBar />
          <div className="centralDiv" style={centralDivStyle}>
              <div style={logoDivStyle}>
                  <Logo fontSize="200" color="white" />
              </div>

              <p style={pStyle}>Hi!<br/>My name is Cpy, welcome to my website🙃</p>
          </div>
          <div style={recentActivitiesStyle}>
              <p style={pStyle}>My recent activities:</p>
              <Project
                  name={"NetPaste"}
                  langs={[python, dart, flutter, android]}
                  description="Copy and paste system between smartphone and computer. Beta testing phase, not available yet"
              />
              <Project
                  name="SQLite-shell"
                  langs={[python]}
                  description="Lightweight cross platform open source GUI SQLite editor"
                  link="https://github.com/cpy-dev/SQLite-shell"
              />
              <Project
                  name="rShell"
                  langs={[python]}
                  description="Remotely access other computer's terminal via local network connection"
                  link="https://github.com/cpy-dev/rShell"
              />
          </div>

      </div>
  );
}

export default App;

/*
 *  <hr width={'90%'} color={'#001000'} />
          <div style={contactsDiv}>
              <p style={contactP}>
                  Contacts:
              </p>

              <div style={contactsTopDiv}>
                  <p style={contactP}>
                      GitHub: <a style={contactA} href={'https://github.com/cpy-dev'}>cpy-dev</a>
                  </p>
                  <p style={contactP}>
                      Instagram: <a style={contactA} href={'https://www.instagram.com/dcc.cpy'}>@dcc.cpy</a>
                  </p>
              </div>

              <p style={contactP}>
                  Email: systemcpy@gmail.com
              </p>
          </div>
 */