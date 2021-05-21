import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Play from "./Play";
import Dictionary from "./Dictionary"; 
import Trending from "./Trending";
import About from "./About";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>            
            <li><NavLink to="/dictionary">Dictionary</NavLink></li>
            <li><NavLink to="/play">Short Quiz</NavLink></li>
            <li><NavLink to="/trending">Trending</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Dictionary" component={Dictionary}/>
            <Route path="/play" component={Play}/>            
            <Route path="/Trending" component={Trending}/>    
            <Route path="/about" component={About}/>            
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
