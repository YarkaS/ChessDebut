import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Play from "./Play";
import Dictionary from "./Dictionary"; 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Chess Debuts 2.0</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/play">Play</NavLink></li>
            <li><NavLink to="/dictionary">Dictionary</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/play" component={Play}/>
            <Route path="/dictionary" component={Dictionary}/>             
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
