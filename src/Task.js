import React, { Component } from 'react';

class Task extends Component {
    state = {  }
    render() { 
        let task = this.props.task;

        return ( 
            <div className="task">
                <p>{task.title}</p> 
            </div>
        );
    }
}
 
export default Task;