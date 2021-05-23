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
    moveOrder: "1.e4 Nf6",
    description:
      "Black immediately attacks White's e4 pawn and hopes White will overextend to protect the pawn. However, White has multiple ways to protect the pawn including advancing the pawn forward or playing Nc3",
  },
  {
    id: 2,
    value: "Amar Opening",
    moveOrder: "1.Nh3",
    description:
      "A highly unusual opening. White develops the knight on the edge of the board hoping to use it in attack in conjunction to expanding out the center. However, since it is not immediately attacking the center, Black has many responses to this, including e5 which opens up an attack on White's knight. ",
  },
  {
    id: 3,
    value: "Benoni Opening",
    moveOrder: "1.d4 Nf6 2.c4 c5",
    description:
      "Black's purpose is to capture the d4 pawn and thereby create a strong queenside pawn majority whose advance can eventually be supported by moving the bishop to g7",
  },
  {
    id: 4,
    value: "Bird's Opening",
    moveOrder: "1.f4",
    description:
      "White's purpose is to gain control of the e5 square." +
      "This opening provides a good attack for White at the expense of a weak kingside." +
      "Black's best response is to play d5." +
      "From here, White has multiple ways to maintain control of the e5 square including moving Nf3 or eventually the bishop to b2.",
  },
  {
    id: 5,
    value: "Bishop's Opening",
    moveOrder: "1.e4 e5 2.Bc4",
    description:
      "The whole point of this opening is to develop the bishop to a good square while also keeping the option of moving the f-pawn. However, this doesn't put any immediate pressure on Black and furthermore, the bishop could come under attack if Black decides to move pawn to d5. ",
  },
  {
    id: 6,
    value: "Bogo-Indian Defense",
    moveOrder: "1.d4 Nf6 2.c4e6 3.Nf3 Bb4",
    description:
      "Black tries to develop its kingside quickly and fights for central position indirectly. However, this means White oftens gets and maintains a space advantage. Furthermore, this gives time for White to develop both of its bishops. ",
  },
  {
    id: 7,
    value: "Budapest Gambit",
    moveOrder: "1.d4 Nf6 2.c4e5",
    description:
      "After White gains an extra pawn by capturing Black's e-pawn, a battle for White's extra pawn immediately starts. Black would move its knight to g4 and its other knight to c6, thereby attacking the extra pawn twice. White will attempt to defend it with bishop to f4 and knight to f3. It is rarely played today due to a lower percentage of draws than other lines and also a lower win rate for black in comparison to other lines. However, that is not to say it is a weak opening. Black can get a good pawn structure and possibilities of attacking White's kingside. ",
  },
  {
    id: 8,
    value: "Caro-Kann Defense",
    moveOrder: "1.e4 c6",
    description:
      "A common defense against the king's pawn opening. Much more compact and solid than the Silician or French, however it leads to good endgames for Black due to Black's superior pawn structure. After 2. d4 d5, the most common moves include Nc3, Nd2, exd5 or e5. ",
  },
  {
    id: 9,
    value: "Catalan Opening",
    moveOrder: "1.d4 Nf6 2.c4 e6 3.g3",
    description:
      "White gains space by moving its pawns to c4 and d4. White eventually will move its bishop to g2, thereby placing pressure on Black's queenside. However the c4 pawn can be weak and White may have to give up a pawn early. ",
  },
  {
    id: 10,
    value: "Center Game",
    moveOrder: "1.e4 e5 2.d4 exd4",
    description:
      "An extremely old opening which was mostly abandoned in the early 20th century before experiencing a modern day revival. If White moves its pawn to c3, this opening transforms into the Danish Gambit. However, the almost universal continuation of this move is White takes the d4 with its queen and then Black responds with knight to c6. From here, White can retreat the queen to a variety of squares, although the most common is e3. From here, White will aggressively move all the queenside peices and attempt to castle queenside and get the rook into the game.  ",
  },
  {
    id: 11,
    value: "Chigorin Defense",
    moveOrder: "1.d4 d5 2.c4 Bc6",
    description:
      "Black doesn't pay attention to basic chess concepts such as a pawn center or strong pair of bishops. Black's main plan is to develop as quickly and as aggressive as possible and start an attack against the White king. ",
  },
  {
    id: 12,
    value: "Danish Gambit",
    moveOrder: "1.e4 e5 2.d4 exd4 3.c3",
    description:
      "White will sacrifice one or two pawns for rapid development and an aggressive attack.  Popular amongst attacking masters, the opening fell out of favor as better defensive lines were discovered for Black. If Black accepts the second gambited pawn, White begins to solidify its attack by playing bishop to c4 and allowing black to capture the b2 pawn. If Black captures the b2, White now captures the pawn by moving bishop to b2. White has developed both the bishops and are staring down long diagonals whereas Black has yet to develop a single piece.  ",
  },
  {
    id: 13,
    value: "Dutch Defense",
    moveOrder: "1.d4 f5",
    description:
      "Visually, the Dutch Defense looks like an opposite Sicilian. However, the placement of the King makes this very different. Pawn to f5 gains space, but can weaken the king's position after castling. ",
  },
  {
    id: 14,
    value: "English Opening",
    moveOrder: "1.c4",
    description:
      "White chooses to fight for the center by moving a wing-pawn. However, moving the pawn to c4 doesn't really help develop anything, but moving the knight to c3 can help solidify White's claim on the center. ",
  },
  {
    id: 15,
    value: "Evans Gambit",
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc6 4.b4",
    description:
      "An aggressive line of the Giuoco Piano. White offers a pawn to challenge Black's bishop on c5. The most popular use of this gambit is the Evergreen game won by Adolf Anderssen against Jean Dufresne.  ",
  },
  {
    id: 16,
    value: "Evans Gambit Accepted",
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc6 4.b4 Bxb4 5.c3",
    description:
      "The most obvious and most usual way for Black to face the gambit is to accept it. After taking the pawn, Black's bishop must move or risk being captured. The two most common moves for the bishop are to either retreat to a5 or to c5. Retreating to a5 is the most populat retreat. It gets out of the way of White's center pawns, but has the disadvantage of removing the a5 square for the black knight. Retreating to c5 is typically played by people unfamiliar with gambit as pawn to d4 attacks the bishop once again and limits Black's options. ",
  },
  {
    id: 17,
    value: "Four Knights",
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6",
    description:
      "Fairly popular opening especially amongst proponents of the concept 'develop knights before bishops'. Both players develop their knights to squares pointed towards the center. Development can happen in any order, so as long as the position is reached. Considered a dinosaur opening as it has been overtaken by the Ruy Lopez, it has recently started gaining some more popularity. ",
  },
  {
    id: 18,
    value: "French Defense",
    moveOrder: "1.e4 e6",
    description:
      "Named after a 1834 game between the cities of London and Paris where the French defense was first utilized, Black attempts to follow e6 with d5 and tries to fight the e4 pawn. This blocks in the light squared bishop, but gives Black a very solid pawn chain. ",
  },
  {
    id: 19,
    value: "Giuoco Piano",
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5",
    description:
      "One of the oldest recorded openings and part of the Italian Game family of openings. Both players aim to develop as quickly as possible, but due to Black's rapid development, White cannot construct a reasonable pawn center. Popular throughout most of the 19th century, modern refinements in defensive play have seen it get overtaken by the Ruy Lopez that offer White greater long-term chances. Furthermore, modern players prefer the slower and more strategic Giuoco Pianissimo. ",
  },
  {
    id: 20,
    value: "Giuoco Pianissimo",
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.d3",
    description:
      "Italian for 'Very Quiet Game'. White aims for a slow buildup play, deferring the pawn push to d4 until it is the right time. By avoiding a confrontation in center, White can enter a positional maneuvering game through a series of exchanges. ",
  },
  {
    id: 21,
    value: "Grunfeld Defense",
    moveOrder: "1.d4 Nf6 2.c4 Nc3 3.d5",
    description:
      "Black gives White a strong center and a space advantage, but uses the d5 pawn to fight for the center. ",
  },
  {
    id: 22,
    value: "Italian Gambit",
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.d4",
    description:
      "Often played as alternative to Giuoco Piano or Giuoco Pianissimo, Black has multiple ways to continue this line. Black can either capture the d-pawn with its pawn, with its knight, or with its bishop. Capturing with the bishop is considered the best move. After bishop captures, a series of captures all occur on the d4 square, with Black coming out on top. ",
  },
  {
    id: 23,
    value: "Italian Game",
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
    description:
      "First played by Italian chess masters as early as the 16th century, White develops its light squared bishop to a strong diagonal aiming at f7 and g8. ",
  },
  {
    id: 24,
    value: "King's Gambit",
    moveOrder: "1.e4 e5 2.f4",
    description:
      "White sacrifices its pawn on f4 to remove Black's pawn on e5. Ideally, White would like to take back the pawn while also commanding the center. This comes at a price of the king being very vulnerable. ",
  },
  {
    id: 25,
    value: "King's Gambit Accepted",
    moveOrder: "1.e4 e5 2.f4 exf4",
    description:
      "Black, more often than not, will accept the gambit. White has two main ways to continue this line. The first is bishop to c4, which starts the Bishop's Gambit. The second is knight to f3 which also prevents Black's queen from moving to h4. ",
  },
  {
    id: 26,
    value: "King's Gambit Declined",
    moveOrder: "1.e4 e5 2.f4 d5",
    description:
      "Also called the Falkbeer Countergambit, Black will push its pawn to d5. After White captures the d5 pawn, Black will move its pawn to e4. At the cost of sacrificing a pawn, Black makes quick and easy development. However, White can respond by moving its pawn to d3. ",
  },
  {
    id: 27,
    value: "King's Indian Attack",
    moveOrder: "1.Nf3 Nf6 2.g3 d5",
    description:
      "After Nf6 for black, White typically moves the Bishop by Bg2, then follows it up with king-side castle",
  },
  {
    id: 28,
    value: "King's Indian Defense",
    moveOrder: "1.d4 Nf6 2.c4 g6",
    description:
      "Considered a 'hypermodern' defense, Black allows White to develop a pawn center, but with moves such as bishop to g7 and pawn to d6, Black has great counter-attacking chances. Black can fight back with moves such as e5 or c5. ",
  },
  {
    id: 29,
    value: "Modern Defense",
    moveOrder: "1.e4 g6",
    description:
      "A hypermodern chess opening in which Black allows White to occupy the center, but then proceeds to attack and undermine this 'ideal' center without attempting to occupy it themselves. This opening is closely related to the Pirc Defense; the main diference being that Black delays developing their knight to f6.",
  },
  {
    id: 30,
    value: "Nimzo-Indian Defense",
    moveOrder: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4",
    description:
      "Created by Chess grandmaster Aron Nimzowitsch, each of black's moves are made to control the e5 and d4 squares with the pieces rather than the pawns. The move bishop to b4 pinning the White knight on c3 is the defining move of the Nimzo-Indian.",
  },
  {
    id: 31,
    value: "Nimzovich-Larsen Attack",
    moveOrder: "1.b3",
    description:
      "By moving the pawn to b3, White chooses to next move its bishop to b2. The bishop on b2 puts massive pressure down the long diagonal. However, this leads to slow kingside development for White and the knight on b1 may find a good position hard to come by. ",
  },
  {
    id: 32,
    value: "Petrov's Defense",
    moveOrder: "1.e4 e5 2.Nf3 Nf6",
    description:
      "First popularized by Alexander Petrov in the mid-19th century. Although it has a reputation for leading to drawn positions, it offers attacking opportunities for both sides. After White's knight takes the e5 pawn, Black should cease copying White's moves with knight takes the e4 pawn. This is because Queen to e2, Black will not be able to move his knight back to f6 because if White's knight moves to c6, Black is in check and will lose the queen. The most popular move therefore becomes moving the pawn to d6. ",
  },
  {
    id: 33,
    value: "Philidor Defense",
    moveOrder: "1.e4 e5 2.Nf3 d6",
    description:
      "Although modern day chess and its emphasis on positional play has all but made this opening extinct in today's game, it is still considered a solid choice for Black. Usually played as an alternative to moving the knight to c6. It is considered a great opening for beginners to learn in that it is simpler and easier to understand than something more complex such as the French opening. ",
  },
  {
    id: 34,
    value: "Pirc Defense",
    moveOrder: "1.e4 d6 2.d4 Nf6 3.Nc3",
    description:
      "Black allows White to take over the center with pawns, but then attempts to counter-attack the pawn center. This move always involves the bishop moving to g7; if that move is not played as soon as possible, then it is not the Pirc defense. However, careful and correct play by White can restrict Black.",
  },
  {
    id: 35,
    value: "Polish Opening",
    moveOrder: "1.b4",
    description:
      "Opens a line of development for the dark squared bishop to move to b2 if thats where the player chooses to move it. However, the pawn on b4 has no natural defender and if Black moves his e pawn, then the White pawn will immediately be under attack by Black's dark squared bishop. ",
  },
  {
    id: 36,
    value: "Queen's Gambit",
    moveOrder: "1.d4 d5 2.c4",
    description:
      "White strikes at Black's central pawn on e5 from the side. Although the c4 pawn isn't guarded, White can always get the pawn back should they choose to do so, however this comes at the expense of a few turns. ",
  },
  {
    id: 37,
    value: "Queen's Gambit Accepted",
    moveOrder: "1.d4 d5 2.d4 dxc4",
    description:
      "Although not as common as Queen's Gambit Declined, this is still a very popular move. Black gives up control of the center by capturing White's pawn. White will try to use the space gained to create an attack against Black. However, Black has counterattacking chances. If White's control of the center can be kept at bay, then Black can play their own counterattacks. Black could move its pawn to c5 and because White cannot capture, Black can then capture that pawn too. ",
  },
  {
    id: 38,
    value: "Queen's Gambit Declined",
    moveOrder: "1.d4 d5 2.c4 e6",
    description:
      "Although Black has a multitude of ways to decline the gambit, this is known as the most common. By playing e6, Black releases its dark squared bishop while simultaneously blocking in its light squared bishop. However, Black has a solid pawn chain to the center. White will try to exploit the passiveness of Black's light squared bishop and Black will try to show it is a vital defensive piece. ",
  },
  {
    id: 39,
    value: "Queen's Indian Defense",
    moveOrder: "1.d4 Nf6 2.Nf3 b6",
    description:
      "Another opening conceived by Aron Nimzowitsch, White refuses to allow the pin of bishop to b4 by instead playing knight to f3. Black responds by moving its bishop to b7, thereby fighting for control of the center from a distance. However, Black must be careful not to shut out its bishop from the game, something a move like pawn to d4 can indirectly do.  ",
  },
  {
    id: 40,
    value: "Richter Veresov",
    moveOrder: "1.d4 Nf6 2.Nc3 d5 3.Bg5",
    description:
      "Although it appears like a mirror of the popular Ruy Lopez, the fundamentals of this opening are quite different. White goes for fast development on the queenside, whereas Black will do the same on the kingside. Players will typically castle on opposite sides of the board. White's play revolves around getting a strong pawn center with pawn to e4. Black, on the other hand, can attempt to counter that with playing bishop to b4 and pinning the knight. ",
  },
  {
    id: 41,
    value: "Ruy Lopez",
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.Bb5",
    description:
      "One of the most popular openings in chess, White moves its bishop to b5 and puts immediate pressure on the knight guarding the center while also developing rapidly. ",
  },
  {
    id: 42,
    value: "Scandinavian Defense",
    moveOrder: "1.e4 d5",
    description:
      "This is the oldest recorded move by Black. Black's goal is to prevent White from controlling the center of the board. White will normally take the Black pawn and Black can continue by recapturing the pawn with its queen, thereby bringing the queen into the game. ",
  },
  {
    id: 43,
    value: "Scotch Game",
    moveOrder: "1.e4 e5 2.Nf3 Nc6 3.d4",
    description:
      "White aims to dominate the center by giving up its d-pawn for Black's e-pawn. Black is forced to capture White's pawn with its own pawn as it has no way of holding onto this pawn. Black should not capture White's pawn with his knight. If that scenario occurs, then the line will follow as such: Black knight takes pawn on d4, White knight takes Black knight on d4, e5 pawn captures White's knight, Queen takes the pawn on d4. In the end, White now has brought the queen into the game and has positioned it on a central square. ",
  },
  {
    id: 44,
    value: "Sicillian Defense",
    moveOrder: "1.e4 c5",
    description:
      "One of the major answers to White's e4 pawn, Black takes control of the d4 square and avoids giving White a central target. It gives both sides great chances to attack the other. ",
  },
  {
    id: 45,
    value: "Slav Defense",
    moveOrder: "1.d4 d5 2.c4 c6",
    description:
      "This is one of the primary defenses to the Queen's gambit. In most Queen's Gambit Declined variations, Black's light squared bishop is stuck. In this opening, the light squared bishop is free to move to f5 or g4. However, Black must be careful when to move the bishop. If the bishop is moved too early, White can push its pawn to c5, thereby establishing a further dominance on the center and incurring a loss of tempo for Black. ",
  },
  {
    id: 46,
    value: "Vienna Game",
    moveOrder: "1.e4 e5 Nc3",
    description:
      "Instead of playing knight to f3 and attacking the black pawn, White chooses to focus on defense and moves it other knight to c3. This gives White options with being aggressive with pawn to d4 or being patient with pawn to g3 and bishop to g2. ",
  },
];

function App() {
  ///first variable is value, second variable is function to set the variables new value
  const [selected, setSelected] = useState(null);

  console.log("this is the selected value: ", selected);
  return (
    <>
      <h1>Welcome to the Dictionary Page</h1>
      <h2>You can learn more about any opening in our database.</h2>
      <h2>
        You can view the board state, see the move order, and even read a brief
        description.
      </h2>
      <h3>To get started, press on the button</h3>
      {/* 
          You are going to send this function that will be executed  on the handleChange on Drawerform component 
          You will also notice that I changed the place where the openingsArray to here instead of the Dictionary.js file
      */}
      <div className="bunton">
        <DrawerForm openings={openingsArray} setSelected={setSelected} />
      </div>

      <br></br>
      <br></br>
      <br></br>
      {/* since u only need the value of the selected*/}
      <div className="ImageDisplayTest">
        <ImageDemo openings={openingsArray} selected={selected} />
      </div>
      <br></br>
      <br></br>
    </>
  );
}

export default App;
