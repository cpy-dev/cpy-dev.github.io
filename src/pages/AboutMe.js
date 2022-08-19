import './AboutMe.css'
import React from "react";
import NavBar from "./NavBar";

const pStyle = {
    'font-size' : '40px',
    'text-align': 'center'
}

export default function AboutMe () {
    return(
        <div>
            <NavBar />
            <p style={pStyle}>
                I'm a 20 years old self taught developer,<br/>
                currently studying Computer Engineering at
                <br/> Università degli Studi di Firenze.<br/><br/>
                I started learning programming at the age of 18.<br/>
                My first language was Java, with which I made my <br/>
                first programs and Android apps.<br/><br/>

                Then I discovered Python, the language <br/>
                I'm most experienced with and which I use the most.<br/>
                The biggest part of my projects and libraries<br/>
                are written in Python.<br/><br/>

                During my first year of University I learned <br/>
                C and C++, which I used mostly for studying purposes.<br/><br/>

                In the same moment I started studying HTML, CSS,<br/>
                JavaScript and React<br/>
                (framework that I used to build this site).<br/><br/>

                Then I discovered the Linux world, which I'm currently<br/>
                studying autonomously.<br/><br/>

                At the moment I'm also studying SQL databasing and its<br/>
                uses for both data storage and analysis.
            </p>
        </div>
    );
};