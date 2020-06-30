import React, { Component } from "react";
import Box from "./Box";
import Boxform from "./BoxForm";
import "./BoxList.css";

class BoxList extends Component {
  state = {
    boxes: [],
  };

  createBox = (newBox) => {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  };

  removeBox = (id) => {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  };

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        removeBox={() => this.removeBox(box.id)}
      />
    ));
    return (
      <div className="BoxList">
        <h1 className="title">Color Box Maker</h1>
        <Boxform createBox={this.createBox} />
        <div className="box">{boxes}</div>
      </div>
    );
  }
}

export default BoxList;
