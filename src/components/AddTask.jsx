import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    newtext: "",
  };

  changetext = (e) => {
    this.setState({ newtext: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.newtext.trim() === ""
      ? alert("Add text to the input")
      : this.props.add(this.state.newtext);
    this.setState({ newtext: "" });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="write your todo"
            value={this.state.newtext}
            onChange={this.changetext}
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}
