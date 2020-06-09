import React, { Component } from 'react';

class SubTask extends Component {
    state = {  }
    render() { 
        let task = this.props.task;

        let subTaskJSX = task.subTask.map(subtask =>{
            return <li>{subtask}</li>
        })
        return ( 
            <div className="task">
                <h3>{task.title}</h3>
                <ul>{subTaskJSX}</ul>
            </div>
         );
    }
}
 
export default SubTask;
