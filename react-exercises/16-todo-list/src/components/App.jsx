/**
 * Create a TODO list app
 * Your input and form should be controlled. This means when the user types text in the textbox,
 * it should be stored in state.
 * When the user clicks on the "Add" button, it should be placed in the TODO list below with the
 * "ListItem" component.
 * When the user clicks on the "X" in the ListItem, it should be deleted from the TODO list
 */

import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

class App extends Component {

  state = {
    todos: [],
    userInput: ''
  }

  setUserInput = userInput => {
    this.setState({
      userInput: userInput
    })
  }

  delete = toDoIndex => {
    this.setState({
      todos: this.state.todos.filter((todo, index) => {
        return index !== toDoIndex;
      })
    })
  }

  addItem = (e) => {
    e.preventDefault()
    const todos = this.state.todos;
    this.setState({
      todos: [...this.state.todos, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    return (
      <div className="container mt-4">
        <header className="App-header">
          <h1>Todo List</h1>
          <form onSubmit={(e) => this.addItem(e)} className="form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={e => this.setUserInput(e.target.value)}
                value={this.state.userInput}
                className="form-control"
                placeholder="Enter text"
                aria-label="Enter text"
                aria-describedby="button-add"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="subimit"
                  id="button-add"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </header>
        <ul className="list-group">
        {this.state.todos.map((todo,index)=>{
          const key = "List Item "  + index;
          return (
          <ListItem
            delete={this.delete}
            toDoIndex={index}
            key={key}
            children={this.state.userInput}
          >{todo}</ListItem>
            )
            })}
        </ul>
      </div>
    );
  }
}

export default App;
