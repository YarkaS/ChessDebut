import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class Dictionary extends Component {
  render() {
    return (
      <div>
        <h2>The dictionary</h2>
        <p>
          List of chess{" "}
          <a href="https://en.wikipedia.org/wiki/List_of_chess_openings">
            openings
          </a>
          .
        </p>
        <Container fluid>
          <Row className = "Row">
            <Col className = "cols">
              <h1>Alekhine's Defense</h1>
              <img src={require("./Imgs/Alekhine.jpeg").default} />
            </Col>
            <Col>
              <h1>Amar Opening</h1>
              <img src={require("./Imgs/Amar.jpeg").default} />
            </Col>
            <Col>
              <h1>Benoni Opening</h1>
              <img src={require("./Imgs/Benoni.jpeg").default} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Bird's Opening</h1>
              <img src={require("./Imgs/BirdsOpening.jpeg").default} />
            </Col>
            <Col>
              <h1>Caro-Kann Defense</h1>
              <img src={require("./Imgs/Caro-Kann.jpeg").default} />
            </Col>
            <Col>
              <h1>Catalan Opening</h1>
              <img src={require("./Imgs/Catalan.jpeg").default} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Dutch Defense</h1>
              <img src={require("./Imgs/Dutch.jpeg").default} />
            </Col>
            <Col>
              <h1>English Opening</h1>
              <img src={require("./Imgs/English.jpeg").default} />
            </Col>
            <Col>
              <h1>Four Knights System</h1>
              <img src={require("./Imgs/FourKnights.jpeg").default} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dictionary;
