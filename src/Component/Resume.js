import React, {Component} from 'react';
var style1={
    fontSize: '30px',
    textAlign: 'center',
    fontWeight:'bold'
}
var style2={
    fontSize: '50px',
    fontFamily:'snell roundhand, cursive',
    fontWeight: 'bold',
    textShadow:'2px 2px 2px gray',
    background:'rgba(255,0,0)',
    height:'75px',
    padding:'15px'
}
var style3={
    background: '#dcdcdc',
    margin: '5px'
}

class Resume extends Component {
    render(){
        return(
            <div>
            <h1 style={style2}>Skills & Experience</h1>
            <ul style={style1}>
                <li style={style3}>HTML5</li>
                <li style={style3}>CSS</li>
                <li style={style3}>JAVASCRIPT</li>
                <li style={style3}>BOOTSTRAP</li>
                <li style={style3}>REACT</li>
                <li style={style3}>NODE</li>
                <li style={style3}>EXPRESS</li>
                <li style={style3}>MONGO DB</li>
            </ul>
            </div>
        )
    }
}

export default Resume;