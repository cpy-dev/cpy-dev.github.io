import React, {useState} from "react";
import Logo from "./Logo";
import { isBrowser, isMobile } from 'react-device-detect';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

function NavBar () {
    const [windowSize, _] = useState(getWindowSize());

    const divMobileStyle = {
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

    const divBrowserStyle = {
        'display' : 'flex',
        'flex-direction' : 'row',
        'justify-content' : 'space-evenly',
        'align-items' : 'center',
        'position' : 'sticky',
        'top' : '0',
        'background-color' : '#172016',
        'box-shadow' : '0px 3px 15px #001000FF',
        'border-radius' : '15px'

    }

    const aMobileStyle = {
        'text-decoration' : 'none',
        'font-size' : '20px',
        'color' : 'white',
        'width' : windowSize.innerHeight>windowSize.innerWidth?'auto':'10%',
        'text-align' : 'center',
        'align-self' : 'center',
        'margin' : windowSize.innerHeight>windowSize.innerWidth?'10px':'0'
    }

    const aBrowserStyle = {
        'text-decoration' : 'none',
        'font-size' : '20px',
        'color' : 'white',
        'width' : '10%',
        'text-align' : 'center',
        'align-self' : 'center',
        'margin' : '0'
    }

    const logoDiv = {
        'display' : 'flex',
        'flex-direction' : 'row',
        'justify-content' : 'center',
    }

    if (isBrowser) {
        return (
            <div style={divBrowserStyle}>
                <a href="/" style={aBrowserStyle}>
                    <div style={logoDiv}>
                        <Logo fontSize="40" color="white"/>
                    </div>
                </a>
                <a href="/skills" style={aBrowserStyle}>Skills</a>
                <a href="/projects" style={aBrowserStyle}>Projects</a>
                <a href="/about-me" style={aBrowserStyle}>About Me</a>
            </div>
        )
    } else if (isMobile) {
        return (
            <div style={divMobileStyle}>
                <a href="/" style={aMobileStyle}>
                    <div style={logoDiv}>
                        <Logo fontSize="40" color="white"/>
                    </div>
                </a>
                <a href="/skills" style={aMobileStyle}>Skills</a>
                <a href="/projects" style={aMobileStyle}>Projects</a>
                <a href="/about-me" style={aMobileStyle}>About Me</a>
            </div>
        )
    }
}

export default NavBar;
