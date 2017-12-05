import React, { Component } from "react";
import "../styles/Audiences.css";

export default class CustomAudiences extends Component {
  render() {
    return (
      <div className="audiences">
        <div className="lander">
          <h1>Batch Create Custom Audiences</h1>
          <p>Create custom audiences by uploading a csv file</p>
        </div>
      </div>
    );
  }
}