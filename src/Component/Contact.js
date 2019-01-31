import React, {Component} from 'react';
var style1={
    background:'rgba(192,192,192)',
    height: '400px',
    fontSize:'30px'
}
var style2={
    fontSize: '50px',
    fontFamily:'snell roundhand, cursive',
    fontWeight: 'bold',
    textShadow:'2px 2px 2px gray',
    background:'rgba(255,0,0)',
    height: '75px',
    padding:'14px'
}
var style3={
    backgroundImage:'url(https://avatars1.githubusercontent.com/u/43447594?s=460&v=4)',
    backgroundSize: 'contain'

}


class Contact extends Component {
    render(){
        return(
            <div style={style1}>
            <h1 style={style2}>Contact Info</h1>
            <p>Contact Number: (404) 993-4773</p>
            <button href='https://github.com/dclemons1' style={style3}>Deborah Clemons' GitHub Link <br></br> Click Here</button>
            <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="deborah-clemons"><a class="LI-simple-link" href='https://www.linkedin.com/in/deborah-clemons?trk=profile-badge'>Deborah Clemons</a></div>
            </div>
        )
    }
}

export default Contact;