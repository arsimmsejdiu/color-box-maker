import React, { Component } from "react";
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <div className="box"
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color,
          }}
        />
        <button onClick={this.props.removeBox}>Delete !!</button>
      </div>
    );
  }
}

export default Box;
