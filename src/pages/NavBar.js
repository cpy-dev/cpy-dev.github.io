import React, {useState} from "react";
import Logo from "./Logo";

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

function NavBar () {
    const [windowSize, _] = useState(getWindowSize());

    const divStyle = {
        'display' : 'flex',
        'flex-direction' : 'row',
        'justify-content' : windowSize.innerHeight>windowSize.innerWidth?'space-between':'space-evenly',
        'align-items' : 'center',
        'position' : 'sticky',
        'top' : '0',
        'background-color' : '#172016',
        'box-shadow' : '0px 3px 15px #001000FF',
        'border-radius' : '15px'

    }
    const aStyle = {
        'text-decoration' : 'none',
        'font-size' : '20px',
        'color' : 'white',
        'width' : windowSize.innerHeight>windowSize.innerWidth?'auto':'10%',
        'text-align' : 'center',
        'align-self' : 'center',
        'margin' : windowSize.innerHeight>windowSize.innerWidth?'10px':'0'
    }

    const logoDiv = {
        'display' : 'flex',
        'flex-direction' : 'row',
        'justify-content' : 'center',
    }

    return (
        <div style={divStyle} >
            <a href="/" style={aStyle}>
                <div style={logoDiv}>
                    <Logo fontSize="40" color="white"/>
                </div>
            </a>
            <a href="/skills" style={aStyle}>Skills</a>
            <a href="/projects" style={aStyle}>Projects</a>
            <a href="/about-me" style={aStyle}>About Me</a>
            <a href="/contacts" style={aStyle}>Contacts</a>
        </div>
    )
}

export default NavBar;
