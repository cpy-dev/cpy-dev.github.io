import React from "react";


const Project = (props) => {
    const containerStyle = {
        'border-radius' : '15px',
        'box-shadow' : '5px 5px 10px #001000FF, -5px -5px 10px #001000FF',
        'width' : '90%',
        'padding' : '10px',
        'display' : 'flex',
        'flex-direction' : 'column',
        'justify-content' : 'center',
        'margin' : '15px'
    }

    const logoStyle = {
        'width' : '70px',
        'height' : '70px'
    }

    let languageIcons = [];

    for(let i = 0; i < props.langs.length; i++) {
        languageIcons.push(
            <object data={props.langs[i]} style={logoStyle} />
        );
    }

    const textStyle = {
        'text-align' : 'center',
        'font-size' : '30px',
        'margin' : '5px',
        'color' : 'whitesmoke',
        'text-decoration' : 'none'
    }

    const langsDivStyle = {
        'display' : 'flex',
        'flex-direction' : 'row',
        'justify-content' : 'space-evenly',
        'padding' : '5px',
        'width' : '50%',
        'align-items' : 'center',
        'align-self' : 'center'
    }

    function hover(e) {
        e.target.style.textDecoration = 'underline';
    }

    function notHover(e) {
        e.target.style.textDecoration = 'none';
    }

    return(
        <div style={containerStyle}>
            <a onMouseOver={hover}
               onMouseOut={notHover}
               href={props.link}
               style={textStyle}>
                {props.name}
            </a>

            <div style={langsDivStyle}>
                {languageIcons}
            </div>

            <p style={textStyle}>
                {props.description}
            </p>
        </div>
    )
}

export default Project;