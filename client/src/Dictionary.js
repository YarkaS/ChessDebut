import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./index.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import DrawerForm from "./AutoComplete";
import ImageDemo from "./ImageDisplay";

const openingsArray = [
  {
    id: 1,
    value: "Alekhine's Defense",
    picture: "./Imgs/Alekhine.jpeg",
    moveOrder: "1.e4 Nf6",
    description:"Black immediately attacks White's e4 pawn and hopes White will overextend to protect the pawn. However, White has multiple ways to protect the pawn including advancing the pawn forward or playing Nc3",
  },
  {
    id: 2,
    value: "Amar Opening",
    picture: "./Imgs/Amar.jpeg",
    description: "A highly unusual opening. White develops the knight on the edge of the board hoping to use it in attack in conjunction to expanding out the center. However, since it is not immediately attacking the center, Black has many responses to this, including e5 which opens up an attack on White's knight. "
  },
  {
    id: 3,
    value: "Benoni Opening",
    picture: <img src={require("./Imgs/Benoni.jpeg").default} />,
    description: "Black's purpose is to capture the d4 pawn and thereby create a strong queenside pawn majority whose advance can eventually be supported by moving the bishop to g7"
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
  },
  {
    id: 5,
    value: "Bishop's Opening",
    picture: <img src="" />,
    moveOrder: "1.e4 e5 2.Nc4",
    description: "The whole point of this opening is to develop the bishop to a good square while also keeping the option of moving the f-pawn. However, this doesn't put any immediate pressure on Black and furthermore, the bishop could come under attack if Black decides to move pawn to d5. ",
  },
  {
    id: 6,
    value: "Bogo-Indian Defense",
    picture: <img src="" />,
    moveOrder: "1.d4 Nf6 2.c4e6 3.Nf3 Bb4",
    description: "Black tries to develop its kingside quickly and fights for central position indirectly. However, this means White oftens gets and maintains a space advantage. Furthermore, this gives time for White to develop both of its bishops. ",
  },
  {
    id: 7,
    value: "Budapest Gambit",
    picture: <img src="" />,
    moveOrder: "1.d4 Nf6 2.c4e5",
    description: "After White gains an extra pawn by capturing Black's e-pawn, a battle for White's extra pawn immediately starts. Black would move its knight to g4 and its other knight to c6, thereby attacking the extra pawn twice. White will attempt to defend it with bishop to f4 and knight to f3. It is rarely played today due to a lower percentage of draws than other lines and also a lower win rate for black in comparison to other lines. However, that is not to say it is a weak opening. Black can get a good pawn structure and possibilities of attacking White's kingside. ",
  },
  {
    id: 8,
    value: "Caro-Kann Defense",
    picture: <img src="" />,
    moveOrder: "1.e4 c6",
    description: "A common defense against the king's pawn opening. Much more compact and solid than the Silician or French, however it leads to good endgames for Black due to Black's superior pawn structure. After 2. d4 d5, the most common moves include Nc3, Nd2, exd5 or e5. ",
  },
  {
    id: 9,
    value: "Catalan Opening",
    picture: <img src=""/>,
    moveOrder: "1.d4 Nf6 2.c4 e6 3.g3",
    description: "White gains space by moving its pawns to c4 and d4. White eventually will move its bishop to g2, thereby placing pressure on Black's queenside. However the c4 pawn can be weak and White may have to give up a pawn early. ",
  },
  {
    id: 10,
    value: "Center Game",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.d4 exd4",
    description: "An extremely old opening which was mostly abandoned in the early 20th century before experiencing a modern day revival. If White moves its pawn to c3, this opening transforms into the Danish Gambit. However, the almost universal continuation of this move is White takes the d4 with its queen and then Black responds with knight to c6. From here, White can retreat the queen to a variety of squares, although the most common is e3. From here, White will aggressively move all the queenside peices and attempt to castle queenside and get the rook into the game.  ",
  },
  {
    id: 11,
    value: "Chigorin Defense",
    picture: <img src=""/>,
    moveOrder: "1.d4 d5 2.c4 Bc6",
    description: "",
  },
  {
    id: 12,
    value: "Danish Gambit",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.d4 exd4 3.c3",
    description: "",
  },
  {
    id: 13,
    value: "Dutch Defense",
    picture: <img src=""/>,
    moveOrder: "1.d4 f5",
    description: "",
  },
  {
    id: 14,
    value: "English Opening",
    picture: <img src=""/>,
    moveOrder: "1.c4",
    description: "",
  },
  {
    id: 15,
    value: "Evans Gambit",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc6 4.b4",
    description: "",
  },
  {
    id: 16,
    value: "Evans Gambit Accepted",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc6 4.b4 Bxb4 5.c3",
    description: "",
  },
  {
    id: 17,
    value: "Four Knights",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6",
    description: "",
  },
  {
    id: 18,
    value: "French Defense",
    picture: <img src=""/>,
    moveOrder: "1.e4 e6",
    description: "",
  },
  {
    id: 19,
    value: "Giuoco Piano",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5",
    description: "",
  },
  {
    id: 20,
    value: "Giuoco Pianissimo",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.d3",
    description: "",
  },
  {
    id: 21,
    value: "Grunfeld Defense",
    picture: <img src=""/>,
    moveOrder: "1.d4 Nf6 2.c4 Nc3 3.d5",
    description: "",
  },
  {
    id: 22,
    value: "Italian Gambit",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.d4",
    description: "",
  },
  {
    id: 23,
    value: "Italian Game",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
    description: "",
  },
  {
    id: 24,
    value: "King's Gambit",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.f4",
    description: "",
  },
  {
    id: 25,
    value: "King's Gambit Accepted",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.f4 exf4",
    description: "",
  },
  {
    id: 26,
    value: "King's Gambit Declined",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.f4 d5",
    description: "",
  },
  {
    id: 27,
    value: "King's Indian Attack",
    picture: <img src=""/>,
    moveOrder: "1.Nf3 Nf6 2.g3 d5",
    description: "",
  },
  {
    id: 28,
    value: "King's Indian Defense",
    picture: <img src=""/>,
    moveOrder: "1.d4 Nf6 2.c4 g6",
    description: "",
  },
  {
    id: 29,
    value: "Modern Defense",
    picture: <img src=""/>,
    moveOrder: "1.e4 g6",
    description: "",
  },
  {
    id: 30,
    value: "Nimzo-Indian Defense",
    picture: <img src=""/>,
    moveOrder: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4",
    description: "",
  },
  {
    id: 31,
    value: "Nimzovich-Larsen Attack",
    picture: <img src=""/>,
    moveOrder: "1.b3",
    description: "",
  },
  {
    id: 32,
    value: "Petrov's Defense",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 Nf6",
    description: "",
  },
  {
    id: 33,
    value: "Philidor Defense",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 d6",
    description: "",
  },
  {
    id: 34,
    value: "Pirc Defense",
    picture: <img src=""/>,
    moveOrder: "1.e4 d6 2.d4 Nf6 3.Nc3",
    description: "",
  },
  {
    id: 35,
    value: "Polish Opening",
    picture: <img src=""/>,
    moveOrder: "1.b4",
    description: "",
  },
  {
    id: 36,
    value: "Queen's Gambit",
    picture: <img src=""/>,
    moveOrder: "1.d4 d5 2.c4",
    description: "",
  },
  {
    id: 37,
    value: "Queen's Gambit Accepted",
    picture: <img src=""/>,
    moveOrder: "1.d4 d5 2.d4 dxc4",
    description: "",
  },
  {
    id: 38,
    value: "Queen's Gambit Declined",
    picture: <img src=""/>,
    moveOrder: "1.d4 d5 2.c4 e6",
    description: "",
  },
  {
    id: 39,
    value: "Queen's Indian Defense",
    picture: <img src=""/>,
    moveOrder: "1.d4 Nf6 2.Nf3 b6",
    description: "",
  },
  {
    id: 40,
    value: "Richter Veresov",
    picture: <img src=""/>,
    moveOrder: "1.d4 Nf6 2.Nc3 d5 3.Bg5",
    description: "",
  },
  {
    id: 41,
    value: "Ruy Lopez",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bb5",
    description: "",
  },
  {
    id: 42,
    value: "Scandinavian Defense",
    picture: <img src=""/>,
    moveOrder: "1.e4 d5",
    description: "",
  },
  {
    id: 43,
    value: "Scotch Game",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.d4",
    description: "",
  },
  {
    id: 44,
    value: "Sicillian Defense",
    picture: <img src=""/>,
    moveOrder: "1.e4 c5",
    description: "",
  },
  {
    id: 45,
    value: "Slav Defense",
    picture: <img src=""/>,
    moveOrder: "1.d4 d5 2.c4 c6",
    description: "",
  },
  {
    id: 46,
    value: "Vienna Game",
    picture: <img src=""/>,
    moveOrder: "1.e4 e5 Nc3",
    description: "",
  },
];

function App() {
  ///first variable is value, second variable is function to set the variables new value
  const [selected, setSelected ] = useState(null);

  console.log('this is the selected value: ', selected)
  return (
    <>
      <h1>Welcome to the Dictionary Page</h1>
      <h2>You can learn more about any opening in our database.</h2>
      <h2>You can view the board state, see the move order, and even read a brief description.</h2>
      <h3>To get started, press on the button</h3>
      {/* 
          You are going to send this function that will be executed  on the handleChange on Drawerform component 
          You will also notice that I changed the place where the openingsArray to here instead of the Dictionary.js file
      */}
      <div className = "bunton">
      <DrawerForm openings={openingsArray} setSelected={setSelected}/>
      </div>
     
      <br></br>
      <br></br>
      <br></br>
      {/* since u only need the value of the selected*/}
      <div className = "ImageDisplayTest">
        <ImageDemo  openings={openingsArray} selected={selected} />
      </div>
      <br></br>
      <br></br>
      
    </>
  );
}

export default App;
