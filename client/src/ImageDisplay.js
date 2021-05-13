import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Image } from 'antd';
import alk from './Imgs/Alekhine.jpeg'
import amar from './Imgs/Amar.jpeg'
// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('./Imgs', false, '/.png/'));

// console.log('these are imgg s ', images)
const openings = {
  "Alekhine's Defense" :alk,
  "Amar Opening" : amar
}

function ImageDemo(props) {

  let selectedValue;

  if(props.selected) {
   selectedValue = props.openings.filter((opening) => opening.value === props.selected)
   console.log('this is value at ', selectedValue)
  } 
  if(props?.selected && props?.openings.length) {
    console.log('SelectedValue ',selectedValue[0])

  }
  return (
    <>

       {props?.selected ?
         <div> this is {selectedValue[0].id} and {selectedValue[0].value} <img src={openings[selectedValue[0].value]}/>
         </div>
          : null

       }
       </>


)
}

// ReactDOM.render(<ImageDemo />, document.getElementById('root'));

export default ImageDemo;