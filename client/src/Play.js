import React, { Component } from "react";
import './index.css';

class Play extends Component {
  render() {
    return (
      <div>
        <h2>Take a quiz!</h2>
        <p>Levels</p>
        <ol className="quiz">
          <ul className="quizButtons"><button>Easy</button></ul>
          <ul className="quizButtons"><button>Medium</button></ul>
          <ul className="quizButtons"><button>Hard</button></ul>
          <playGame />
        </ol>
      </div>
    );
  }
}
 
export default Play;
