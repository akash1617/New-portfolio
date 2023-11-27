import React, { Component } from 'react'
import "./BanStyle2.css"

class Banner2 extends Component {
  render() {
    return (
      <div className="banner2">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Banner2