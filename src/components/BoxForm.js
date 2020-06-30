import React, { Component } from "react";
import "./BoxForm.css";
import uuid from "uuid/dist/v4";

class BoxForm extends Component {
  state = {
    height: "",
    width: "",
    color: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    this.props.createBox(newBox);
    this.setState({
      height: "",
      width: "",
      color: "",
    });
  };

  render() {
    return (
      <form className="BoxForm" onSubmit={this.handleSubmit}>
        <h3 className="h3">Give the Height, Width and Color of the Box</h3>
        <div className="form">
          <label htmlFor="height">Height {"->"} </label>
          <input
            id="height"
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="width">Width {"->"} </label>
          <input
            id="width"
            type="text"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="color">Color {"->"} </label>
          <input
            id="color"
            type="text"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <button>Add a New Button</button>
      </form>
    );
  }
}

export default BoxForm;
