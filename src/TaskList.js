import React, { Component } from "react";
import Task from "./Task";

class TaskList extends Component {
  state = {};
  render() {
    let tasksList = this.props.tasks.map((task) => {
      return (
        <li key={task.id}>
          <Task task={task} />
          <button onClick={() => {this.props.deleteTask(task.id)}}>X</button>
        </li>
      );
    });

    return (
      <div className="tasklist">
        <ul>{tasksList}</ul>
      </div>
    );
  }
}

export default TaskList;
