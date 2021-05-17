import React, { Component } from "react";
import image from "./assets/img/about.jpg"
class About extends Component {
  render() {
    return (
      <div>
      <h2> Jesse </h2> 
        <h3> My name is Jesse Huang and I am a part of this group working on the BE. A bit about myself is that I am an aspiring rocket flight module developer. One of my big goals in life is to develop software that will one day shoot rockets into space and land on Mars, until that day comes I have been taking on these small challenges in life and improving my software developing skills to that point. So far I am only a student learning once I get more experience and learn more about the tech, I will get to that goal someday. </h3> 
      <h2> Andrew </h2>
	<h3> My name is Andrew Qu and I am working as an back-end developer in this group. A bit about myself, I'm an inspired game developer. One of my biggest goals is to make an MMORPGs. My biggest inspiration came from anime. At the moment, I am currently a student working on acquiring the necessary knowledge to reach my goal and working on smaller goals. </h3>
	<h2> Kanak </h2>
	<h3> I'm Kanak and I'm working  on the front-end for Chess Debuts. My passion is games and you can catch me trying(and failing) to make the next bug battle Royale or in the middle of a 3 hour gaming session. </h3>
	<h2> Yaroslava </h2>
	<h3> My name is Yaroslava and I am excited to build the product that can be useful for all the chess beginners around the world. </h3>
	 <h2> <img src={image} style = {{width: 1010 }}/> </h2>
      
      </div>
    );
  }
}


export default About;
