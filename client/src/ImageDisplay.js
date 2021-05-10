import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Image } from 'antd';

function ImageDemo(url) {
  return (
    <Image
      width={200}
      src = {require("./Imgs/Alekhine.jpeg").default}
      alt="Alekhine's Defense"
    />
  );
}

ReactDOM.render(<ImageDemo />, document.getElementById('root'));

export default ImageDemo;