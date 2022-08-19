import React from "react";
import NavBar from "./NavBar";

const contactsStyle = {
    'text-align' : 'center',
    'font-size'  : '30px'
}

const linkStyle = {
    'text-align' : 'center',
    'font-size'  : '30px',
    'color' : 'whitesmoke'

}

const divStyle = {
    'display' : 'flex',
    'flex-direction' : 'column',
    'justify-content' : 'space-evenly'
}

export default function Contacts () {
    return (
        <div>
            <NavBar />
            <div style={divStyle}>
                <p style={contactsStyle}>Contacts:</p>
                <p style={linkStyle}>GitHub: <a href={'https://github.com/cpy-dev'} style={linkStyle}>cpy-dev</a></p><br/>
                <p style={linkStyle}>Instagram: <a href={'https://www.instagram.com/dcc.cpy'} style={linkStyle}>@dcc.cpy</a></p><br/>
                <p style={linkStyle}>Email: systemcpy@gmail.com</p>
            </div>
        </div>
    );
};