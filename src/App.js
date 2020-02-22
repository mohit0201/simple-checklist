import React, { Component } from 'react';
import "./style.css"
import ToDoItem from "./components/ToDoItem"
import todosData from "./components/todosData"
import Header from "./components/Header"

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {

    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return(
      <div className="to-do-container">
        <Header />
        <h1 className="heading">Here's your To Do List</h1>
        {todoItems}
      </div>
    )
  }
}

export default App;
