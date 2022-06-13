import React, { Component } from 'react';
import "./About.css";
import T3 from "../assets/T3.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {T3}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Tommy Cano</div>
        <div className="brief_description">
          Hello everyone! My name is Tommy Cano and I am a rising Senior studying Computer Science at St. John's University. I can not wait to see how far IBM can take me!
        </div>
      </div>
    </div> 
      </div>
    )
  }
}