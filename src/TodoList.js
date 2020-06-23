import React, { Component } from 'react';

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    state = {
        tasks: [
            {
                id: uuidv4(),
               title: "Faire ma demande à Régine",
            },
            {
                id: uuidv4(),
                title: "Prier pour qu'elle dise oui",
            }
        ]
     }

     addTask = (task) =>  {
         console.log(task);
         let newTask = {
             id: uuidv4(),
             title: task
         }
         this.setState({
             tasks: [...this.state.tasks, newTask]
         })
     }

     deleteTask = (id) => {
         console.log(id);
         let tasks = this.state.tasks.filter(task => task.id !== id);
         this.setState({
             tasks: tasks
         })
     }

    render() { 

        return ( 
        <div className="todolist">
            <TaskForm addTask={this.addTask} />
            <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
        </div> 
        );
    }
}
 
export default TodoList;

