import React, {Component} from 'react';
var style1 = {
  backgroundImage: 'url(https://hdqwalls.com/wallpapers/programming-world-map-on.jpg)',
  backgroundSize: 'cover',
  zindex: '-1',
  height: '700px',
  backgroundRepeat:'no-repeat',
};
var style2 = {
  textShadow: '5px 5px 5px white',
  fontSize: '100px',
  color: 'red',
  margin: 'auto',
}
var style3 = {
  color: 'white',
  fontFamily: 'snell roundhand, cursive',
  textShadow: '3px 3px 3px red',
  fontSize: '50px',
  fontWeight: 'bold'
  
}
var style4={
  background:'rgba(192,192,192,.3)',
  alignContent:'center',
  marginTop:'15%'
}

class Header extends Component {
    render(){
        return(
      <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">WebSiteName</a>
          </div>
          <ul class="nav navbar-nav">
           <li class="active"><a href="#">Home</a></li>
           <li><a href="#">About Me</a></li>
           <li><a href="#">Contact</a></li>
           <li><a href="#"></a></li>
          </ul>
        </div>
      </nav>
      <div class='jumbotron' style={style1}>
      <div class='innerText' style={style4}>
      <h1 style={style2}>Deborah Clemons</h1>
      <h2 style={style3}>Software Developer Apprentice</h2>
      <h3 style={style3}>Atlanta, Georgia</h3>
      </div>
      </div>
      </div>
      
        )
    }
}

export default Header;