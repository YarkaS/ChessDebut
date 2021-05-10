import React from "react";
import ReactDOM from "react-dom";
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
  AutoComplete,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom";

const openingsArray = [
    {
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
    },
    {
      id: 5,
      value: "Bishop's Opening",
      picture: <img src="" />,
      moveOrder: "1.e4 e5 2.Nc4",
      description: "",
    },
    {
      id: 6,
      value: "Bogo-Indian Defense",
      picture: <img src="" />,
      moveOrder: "1.d4 Nf6 2.c4e6 3.Nf3 Bb4",
      description: "",
    },
    {
      id: 7,
      value: "Budapest Gambit",
      picture: <img src="" />,
      moveOrder: "1.d4 Nf6 2.c4e5",
      description: "",
    },
    {
      id: 8,
      value: "Caro-Kann Defense",
      picture: <img src="" />,
      moveOrder: "1.e4 c6",
      description: "",
    },
    {
      id: 9,
      value: "Catalan Opening",
      picture: <img src=""/>,
      moveOrder: "1.d4 Nf6 2.c4 e6 3.g3",
      description: "",
    },
    {
      id: 10,
      value: "Center Game",
      picture: <img src=""/>,
      moveOrder: "1.e4 e5 2.d4 exd4",
      description: "",
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

const { Option } = Select;
export default class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleChange = () => {
    console.log('this has beeen selected')
  }

  render() {
    
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> Search Openings
        </Button>
        <Drawer
          title="Search your favorite Chess Opening"
          width={520}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Form layout="vertical" hideRequiredMark onChange={this.handleChange}>
            <Row gutter={16}>
              <AutoComplete
                style={{
                  width: 200,
                }}
                options={openingsArray}
                placeholder="try to type `b`"
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <div className = "whiteSpace">
                  <img src="https://media2.uscfsales.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_eso_b_5_-_korica.jpg" />
                </div>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}

ReactDOM.render(<DrawerForm />, document.getElementById("root"));
