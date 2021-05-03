import React, { Component, useState } from "react";
//import {Container, Row, Col, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./index.css";
import {
  Drawer,
  Button,
  Form,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Image,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import DrawerForm from "./AutoComplete";
import ImageDemo from "./ImageDisplay";



function App() {
  return (
    <>
      <h1>Welcome to the Dictionary Page</h1>
      <h2>Come here to gain learn more about any opening.</h2>
      <h2>You can view the final board state, see the move order, and read a brief description</h2>
      <h3>To get started, press on the button</h3>
      <DrawerForm />
      <br></br>
      <ImageDemo />
    </>
  );
}

export default App;
