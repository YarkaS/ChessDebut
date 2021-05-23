import React from "react";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "antd";
import alk from "./Imgs/Alekhine.jpeg";
import amar from "./Imgs/Amar.jpeg";
import ben from "./Imgs/Benoni.jpeg";
import birds from "./Imgs/BirdsOpening.jpeg";
import bsh from "./Imgs/BishopsOpening.jpeg";
import bid from "./Imgs/Bogo-Indian(D).jpeg";
import buda from "./Imgs/BudapestGambit.jpeg";
import ckd from "./Imgs/Caro-Kann.jpeg";
import cat from "./Imgs/Catalan.jpeg";
import cnt from "./Imgs/CenterGame.jpeg";
import chg from "./Imgs/Chigorin.jpeg";
import dan from "./Imgs/DanishGambit.jpeg";
import dch from "./Imgs/Dutch.jpeg";
import eng from "./Imgs/English.jpeg";
import evg from "./Imgs/EvansGambit.jpeg";
import ega from "./Imgs/EvansGambitAccepted.jpeg";
import fkn from "./Imgs/FourKnights.jpeg";
import frc from "./Imgs/French.jpeg";
import gup from "./Imgs/GiuocoPiano.jpeg";
import gps from "./Imgs/GiuocoPianissimo.jpeg";
import gfd from "./Imgs/Grunfeld.jpeg";
import ilg from "./Imgs/ItalianGambit.jpeg";
import itl from "./Imgs/Italian.jpeg";
import kng from "./Imgs/KingsGambit.jpeg";
import kga from "./Imgs/KingsGambit(A).jpeg";
import kgd from "./Imgs/KingsGambit(D).jpeg";
import kia from "./Imgs/KingsIndian(A).jpeg";
import kid from "./Imgs/KingsIndian(D).jpeg";
import mod from "./Imgs/ModernD.jpeg";
import nid from "./Imgs/NimzoIndian.jpeg";
import nla from "./Imgs/NimzoLarsen.jpeg";
import pvd from "./Imgs/PetrovsD.jpeg";
import phl from "./Imgs/Philidor.jpeg";
import pcd from "./Imgs/PircsDefense.jpeg";
import pol from "./Imgs/Polish.jpeg";
import qug from "./Imgs/QueensGambit.jpeg";
import qga from "./Imgs/QueensGambit(A).jpeg";
import qgd from "./Imgs/QueensGambit(D).jpeg";
import qid from "./Imgs/QueensIndian(D).jpeg";
import rtv from "./Imgs/RichterVeresov.jpeg";
import ruy from "./Imgs/RuyLopez.jpeg";
import snd from "./Imgs/Scandi.jpeg";
import sco from "./Imgs/Scotch.jpeg";
import sic from "./Imgs/Sicilian.jpeg";
import slv from "./Imgs/Slav.jpeg";
import vin from "./Imgs/Vienna.jpeg";
import { queryByDisplayValue } from "@testing-library/dom";

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('./Imgs', false, '/.png/'));

// console.log('these are imgg s ', images)
const openings = {
  "Alekhine's Defense": alk,
  "Amar Opening": amar,
  "Benoni Opening": ben,
  "Bird's Opening": birds,
  "Bishop's Opening": bsh,
  "Bogo-Indian Defense": bid,
  "Budapest Gambit": buda,
  "Caro-Kann Defense": ckd,
  "Catalan Opening": cat,
  "Center Game": cnt,
  "Chigorin Defense": chg,
  "Danish Gambit": dan,
  "Dutch Defense": dch,
  "English Opening": eng,
  "Evans Gambit": evg,
  "Evans Gambit Accepted": ega,
  "Four Knights": fkn,
  "French Defense": frc,
  "Giuoco Pianissimo": gps,
  "Giuoco Piano": gup,
  "Gruenfeld Defense": gfd,
  "Italian Gambit": ilg,
  "Italian Game": itl,
  "King's Gambit": kng,
  "King's Gambit Accepted": kga,
  "King's Gambit Declined": kgd,
  "King's Indian Attack": kia,
  "King's Indian Defense": kid,
  "Modern Defense": mod,
  "Nimzo-Indian Defense": nid,
  "Nimzovich-Larsen Attack": nla,
  "Petrov's Defense": pvd,
  "Philidor Defense": phl,
  "Pirc Defense": pcd,
  "Polish Opening": pol,
  "Queen's Gambit": qug,
  "Queen's Gambit Accepted": qga,
  "Queen's Gambit Declined": qgd,
  "Queen's Indian Defense": qid,
  "Richter-Veresov Attack": rtv,
  "Ruy-Lopez": ruy,
  "Scandinavian Defense": snd,
  "Scotch Game": sco,
  "Sicilian Defense": sic,
  "Slav Defense": slv,
  "Vienna Game": vin,
};

function ImageDemo(props) {
  let selectedValue;

  if (props.selected) {
    selectedValue = props.openings.filter(
      (opening) => opening.value === props.selected
    );
    console.log("this is value at ", selectedValue);
  }
  if (props?.selected && props?.openings.length) {
    console.log("SelectedValue ", selectedValue[0]);
  }
  return (
    <>
      {props?.selected ? (
        <div className = "OGdiv">
         
          <Container>
            <Row>
              <Col><p className="ImageText">{selectedValue[0].value}</p></Col>
            </Row>
            <Row>
              <Col>
                
                <Image src={openings[selectedValue[0].value]} />
              </Col>
              <Col>
                <p className="MoveText">
                  Move order: {selectedValue[0].moveOrder}
                </p>
                <br></br>
                <p className="DescriptionText">{selectedValue[0].description}</p>
              </Col>
            </Row>
          </Container>
        </div>
      ) : null}
    </>
  );
}

// ReactDOM.render(<ImageDemo />, document.getElementById('root'));

export default ImageDemo;
