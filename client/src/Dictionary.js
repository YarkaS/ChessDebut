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
  return (
    <>
      <h1>Welcome to the Dictionary Page</h1>
      <h2>You can learn more about any opening in our database.</h2>
      <h2>You can view the board state, see the move order, and even read a brief description.</h2>
      <h3>To get started, press on the button</h3>
      <DrawerForm />
      <br></br>
      <br></br>
      <br></br>
      <ImageDemo />
    </>
  );
}

export default App;
