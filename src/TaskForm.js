import React, { Component } from 'react';

class TaskForm extends Component {
    state = { 
        task: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.task);
      }
    
      handleChange = (e) => {
        this.setState({
          task: e.target.value
        })
      }

    render() { 
        return ( 
            <div className="taskform">
                <form onSubmit={this.handleSubmit} >
                    <input type="text" name="task" id="" 
                    value={this.state.task} onChange={this.handleChange}
                    />
                    <button type="submit">Envoyer</button>
                </form>
            </div>
         );
    }
}
 
export default TaskForm;