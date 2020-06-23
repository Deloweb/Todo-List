import React, { Component } from 'react';
import './App.css';

import TodoList from "./TodoList";

/* 
Vider ce qui ne sert à rien dans le projet create-react-app de base
Créer un composant TodoList.
Celui-ci a des tâches, et des sous-tâches. Kiss kiss bang bang
*/

class App extends Component {
  state = { 
   }

  render() { 
    return ( 
      <div className="App">
        <TodoList/>
      </div>
     );
  }
}
 
export default App;