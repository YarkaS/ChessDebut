import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Image } from 'antd';

function ImageDemo() {
  return (
    <Image
      width={200}
      src = {require("./Imgs/Amar.jpeg").default}
    />
  );
}

ReactDOM.render(<ImageDemo />, document.getElementById('root'));

export default ImageDemo;