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
  handleChange = (e) => {

    console.log("this is being changed yo, lets do something about it")
    this.props.setSelected(e)
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
          
          <Form layout="vertical" hideRequiredMark>
          
            <Row gutter={16}>
              <AutoComplete
                style={{
                  width: 200,
                }}

                /* THIS ARRAY NOW COMES FROM THE DICTIONARY JS FILE */
                options={this.props.openings}
                placeholder="select an opening from the list"
                onChange={this.handleChange}

                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
            </Row>
            
            <Row gutter={16}>
            
              
              <div className="whiteSpace">
                <img className="fig" src="client/src/Imgs/BethHarmon.png" alt="Miss Beth" />
              </div>
              
              
            </Row>
            
          </Form>
          
        </Drawer>
      </>
    );
  }
}

ReactDOM.render(<DrawerForm />, document.getElementById("root"));