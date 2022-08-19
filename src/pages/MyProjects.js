import './MyProjects.css'
import React from "react";
import NavBar from "./NavBar";

import python from '../svgs/python.svg'
import cpp from '../svgs/c++.svg'
import c from '../svgs/c.svg'
import css from '../svgs/css.svg'
import java from '../svgs/java.svg'
import html from '../svgs/html.svg'
import react from '../svgs/react.svg'

import Project from "./Project";

const mainContainer = {
    'display' : 'flex',
    'flex-direction' : 'column',
    'justify-content' : 'space-between',
    'align-items' : 'center'
}

const mainTitle = {
    'font-size' : '40px'
}

export default function MyProjects () {
    return (
        <div>
            <NavBar />
            <div style={mainContainer}>
                <p style={mainTitle} >My Projects:</p>
                <Project
                    name="SQLite-shell"
                    langs={[python]}
                    description="Lightweight cross platform open source GUI SQLite editor"
                    link="https://github.com/cpy-dev/SQLite-shell"
                />
                <Project
                    name="This site"
                    langs={[react, html, css]}
                    description="Not much to say here"
                    link="/"
                />
                <Project
                    name="rShell"
                    langs={[python]}
                    description="Remotely access other computer's terminal via TCP connection"
                    link="https://github.com/cpy-dev/rShell"
                />
                <Project
                    name="Terminal-Libs"
                    langs={[python, cpp]}
                    description="Same library, for two languages. Allows terminal interaction retrieving the output and maintaining directory changes"
                    link="https://github.com/cpy-dev/TerminalLibs"
                />
                <Project
                    name="WbSearch"
                    langs={[python]}
                    description="Search or open links on your main browser directly from terminal"
                    link="https://github.com/cpy-dev/WbSearch"
                />
            </div>
        </div>
    )
}