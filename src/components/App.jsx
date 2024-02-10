import { Component } from "react";
import { nanoid } from "nanoid";

import toDoListArr from "../todo.json";
import { ToDoList } from "./ToDo/ToDoList";
import { GoalForm } from "./EditNewGoal/GoalForm";

export class App extends Component {
  state = {
    todos: toDoListArr,
    filter: '',
  }

  addToDo = (text) => {
    const newToDo = {
      text,
      completed: false,
      id: nanoid()
    }
    
    this.setState((prevState)=>{
      return {
        todos: [newToDo, ...prevState.todos]
      }
    })
  }

  removeToDo = (event) => {
    const goals = Array.from(document.querySelectorAll(".goal-item"));
    const goalToRemove = goals.find((goal) => goal.dataset.id === event.target.parentNode.dataset.id);
    goalToRemove.remove()
  }

  renderCompleted = (todoId) => {
    this.setState(prevState => (
      {todos: prevState.todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo)}
    ))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  render() {
    return (
      <>
        <GoalForm addToDo={this.addToDo} />
        <ToDoList toDoList={this.state.todos} removeToDo={this.removeToDo} renderCompleted={this.renderCompleted} />
        
      </>
    )
    }
};
