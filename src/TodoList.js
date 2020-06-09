import React, { Component } from 'react';
import Task from "./Task";

class TodoList extends Component {
    state = { 
        todoListTitle: "My Todo List",
        tasks: [
            {
                title: "Faire ma chambre",
                subTask :[
                    "Faire les poussières", "Passer l'aspirateur", "Laver le sol", "Laver les carreaux"
                ]
            },
            {
                title: "Faire la vaiselle", 
                subTask: [
                "Laver la vaisselle", "Essuyer la vaiselle"
                ]
            },
            {
                title: "Monter mon pc",
                subTask: [
                "Recevoir toutes les pièces", "Monter les pièces", "Profiter"
            ]
        },
            {
                title: "Faire la cuisine", 
                subTask: [
                "Préchauffer le four", "Mettre la pizza dans le four", "Manger"
            ]
        }
        ]
     }
    render() { 
        return ( 
            <div className="todolist">
                <h2 className="toolist__title">{this.state.todoListTitle}</h2>
                <Task title ={this.state.tasks}/>
            </div>
         );
    }
}
 
export default TodoList;
