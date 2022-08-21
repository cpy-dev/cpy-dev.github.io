function Logo (props) {
    const cStyle = {
        'color' : props.color,
        'font-family' : '"Open Sans", sans serif',
        'font-size' : props.fontSize + 'px',
        'margin-top' : '0',
        'margin-bottom' : '0',
    }
    const pStyle = {
        'color' : props.color,
        'font-family' : '"Open Sans", sans serif',
        'font-size' : props.fontSize + 'px',
        'margin-top' : '0',
        'margin-bottom' : '0',
        'margin-left' : ((parseInt(props.fontSize)*0.4)*-1).toString() + 'px',
    }
    const yStyle = {
        'color' : props.color,
        'font-family' : '"Open Sans", sans serif',
        'font-size' : parseInt(props.fontSize)-(props.fontSize*0.05) + 'px',
        'margin-top' : props.fontSize*0.05 + 'px',
        'margin-bottom' : '0',
        'margin-left' : ((parseInt(props.fontSize)*0.71)*-1).toString() + 'px',
        'padding-bottom' : -'10px'
    }
    const divStyle = {
        'display' : 'flex',
        'flex-direction' : 'row'
        /*'margin-left' : '-25px'*/
    }
    return (
        <div style={divStyle}>
            <p style={cStyle}>C</p>
            <p style={pStyle}>P</p>
            <p style={yStyle}>Y</p>
        </div>
    )
}

export default Logo;