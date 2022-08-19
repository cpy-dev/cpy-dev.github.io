import React from "react";
import Logo from "./Logo";

function NavBar () {
    const divStyle = {
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
    const aStyle = {
        'text-decoration' : 'none',
        'font-size' : '20px',
        'color' : 'white',
        'width' : '10%',
        'text-align' : 'center',
        'align-self' : 'center'
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
