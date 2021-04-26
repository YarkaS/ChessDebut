import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Play from "./Play";
import Dictionary from "./Dictionary"; 
import Board from "./Board";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/play">Short Quiz</NavLink></li>
            <li><NavLink to="/dictionary">Dictionary</NavLink></li>
            <li><NavLink to="/board">Chess Board</NavLink></li>
            
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/play" component={Play}/>
            <Route path="/Dictionary" component={Dictionary}/>
            <Route path="/Board" component={Board}/>              
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
