import React, {Component} from 'react';
var style2={
    fontSize: '50px',
    fontFamily:'snell roundhand, cursive',
    fontWeight: 'bold',
    textShadow:'2px 2px 2px gray',
    background:'rgba(255,0,0)',
    height: '75px',
    padding:'14px'
}
var style1={
fontSize:'35px'
}

class Summary extends Component {
    render(){
        return(
            <div>
            <h1 style={style2}>About Me</h1>
            <p style={style1}>Entry level software developer with skills in HTML5, CSS, Bootstrap, Javascript, MongoDB, Express, Node and React (MERN stack). Understanding of programming concepts and the ability to learn new concepts at an accelerated pace. I would like to use the skills I have received to gain access into the industry and further my career in software development. Please check out my Github and Linkedin profiles to get a better assessment of my skills.</p>
            </div>
        )
    }
}

export default Summary;