import React from "react";
import NavBar from "./NavBar";
import {useEffect, useState} from 'react';

import python from '../svgs/python.svg'
import cpp from '../svgs/c++.svg'
import c from '../svgs/c.svg'
import css from '../svgs/css.svg'
import java from '../svgs/java.svg'
import html from '../svgs/html.svg'
import react from '../svgs/react.svg'
import bash from '../svgs/bash.svg'

const Language = (props) => {
    const internalDiv = {
        'display' : 'flex',
        'flex-direction' : 'row',
        'justify-content' : 'flex-start',
        'align-items' : 'center',
        'margin-bottom' : '10px',
        'offset-anchor' : props.anchor
    }
    const svgStyle = {
        'height' : '100px',
        'width' : '100px',
        'margin' : '0 10px 0 10px'
    }

    if (props.anchor === 'left') {
        return (
            <div style={internalDiv}>
                <object type="" data={props.language} style={svgStyle} />
                <h1>{props.name}</h1>
            </div>
        )
    } else {
        return (
            <div style={internalDiv}>
                <h1>{props.name}</h1>
                <object type="" data={props.language} style={svgStyle} />
            </div>
        )
    }
}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const Content = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const centralDiv = {
        'margin-top' : '20px',
        'margin-left' : '20%',
        'margin-right' : '20%',
        'display' : 'flex',
        'flex-direction' : 'column',
        'justify-content' : 'center'
    }

    const middleDiv = {
        'display' : 'flex',
        'flex-direction' : 'row',
        'justify-content' : 'space-between',
        'align-items' : 'center',
        'margin-bottom' : '10px'
    }

    if (windowSize.innerHeight > windowSize.innerWidth) {
        return(
            <div style={centralDiv}>
                <Language name="Python" language={python} anchor="left" />
                <Language name="HTML" language={html} anchor="left" />
                <Language name="C++" language={cpp} anchor="left" />
                <Language name="CSS" language={css} anchor="left" />
                <Language name="C" language={c} anchor="left" />
                <Language name="React" language={react} anchor="left" />
                <Language name="Java" language={java} anchor="left" />
                <Language name="Bash" language={bash} anchor="left" />
            </div>
        )
    } else {
        return(
            <div style={centralDiv}>
                <div style={middleDiv}>
                    <Language name="Python" language={python} anchor="left" />
                    <Language name="HTML" language={html} anchor="right" />
                </div>

                <div style={middleDiv}>
                    <Language name="C++" language={cpp} anchor="left" />
                    <Language name="CSS" language={css} anchor="right" />
                </div>

                <div style={middleDiv}>
                    <Language name="C" language={c} anchor="left" />
                    <Language name="React" language={react} anchor="right" />
                </div>

                <div style={middleDiv}>
                    <Language name="Java" language={java} anchor="left" />
                    <Language name="Bash" language={bash} anchor="right" />
                </div>
            </div>
        )
    }
}

const centralDiv = {
    'margin-top' : '20px',
    'margin-left' : '20%',
    'margin-right' : '20%',
    'display' : 'flex',
    'flex-direction' : 'column',
    'justify-content' : 'center'
}

const middleDiv = {
    'display' : 'flex',
    'flex-direction' : 'row',
    'justify-content' : 'space-between',
    'align-items' : 'center',
    'margin-bottom' : '10px'
}


export default function Skills () {
  return (
      <div>
          <NavBar />
          <Content />
      </div>
  );
};