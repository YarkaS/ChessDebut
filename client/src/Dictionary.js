import React, { Component, useState } from "react";
//import {Container, Row, Col, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./index.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import DrawerForm from "./AutoComplete";
import ImageDemo from "./ImageDisplay";



function App() {

  const [ selected, setSelected ] = useState(null);

let openings = [{
  id: 1,
  value: "Alekhine's Defense",
  picture: "./Imgs/Alekhine.jpeg",
},
{
  id: 2,
  value: "Amar Opening",
  picture: "./Imgs/Amar.jpeg",
},
{
  id: 3,
  value: "Benoni Opening",
  picture: <img src={require("./Imgs/Benoni.jpeg").default} />,
},
{
  id: 4,
  value: "Bird's Opening" ,
  picture: <img src="" />,
  moveOrder: "1.f4",
  description: "White's purpose is to gain control of the e5 square." + 
                "This opening provides a good attack for White at the expense of a weak kingside." +
                "Black's best response is to play d5." + 
                "From here, White has multiple ways to maintain control of the e5 square including moving Nf3 or eventually the bishop to b2.",
}]


  return (
    <>
      <h1>Welcome to the Dictionary Page</h1>
      <h2>You can learn more about any opening in our database.</h2>
      <h2>You can view the board state, see the move order, and even read a brief description.</h2>
      <h3>To get started, press on the button</h3>

      <select onChange={(e)=> {
        setSelected(openings[e.target.value])
      }}>
        {openings.map((o) => {
          return(
            <option value={o.value}>{o.value}</option>
          )
        })}
      </select>
      {/* <DrawerForm /> */}
      {
        
      }
      <br></br>
      <br></br>
      <br></br>

      <ImageDemo  /> 
    </>
  );
}

export default App;
