import "./App.css";

import React, { Component } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default class App extends Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        action: "Learn HTML",
        isdone: true,
      },
      {
        id: Math.random(),
        action: "Learn CSS",
        isdone: true,
      },
      {
        id: Math.random(),
        action: "Learn API",
        isdone: false,
      },
    ],
  };
  handelDelet = (TaskID) => {
    this.setState({ tasks: this.state.tasks.filter((el) => el.id !== TaskID) });
  };
  handelComplete = (TaskID) => {
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === TaskID ? { ...el, isdone: !el.isdone } : el
      ),
    });
  };
  handeladd = (inputVal) => {
    const newTodo = { id: Math.random(), action: inputVal, isdone: false };
    this.setState({ tasks: [...this.state.tasks, newTodo] });
  };
  render() {
    return (
      <div className="App">
        <AddTask add={this.handeladd} />
        <TaskList
          tasks={this.state.tasks}
          del={this.handelDelet}
          comp={this.handelComplete}
        />
      </div>
    );
  }
}
