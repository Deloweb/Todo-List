import React, { Component } from 'react';
import SubTask from "./SubTask";

class Task extends Component {
    render() { 
        let taskArrayJSX = this.props.title.map(task => 
            <li><SubTask task={task} /></li>)

        return ( 
            <ul className="task-list">
                {taskArrayJSX}
            </ul>

         );
    }
}
 
export default Task;
