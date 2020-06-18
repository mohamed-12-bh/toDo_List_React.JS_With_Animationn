import React, { Component } from "react";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
class App extends Component {
  state = {
    todos: [
      {
        id: 100,
        content: "milk",
      },
      { id: 2, content: "coffee" },
    ],
  };
  deleteItem = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
    });
  };

  addItem = (content) => {
    this.setState({
      todos: [...this.state.todos, { content, id: Math.random() }],
    });
  };

  render() {
    return (
      <div className="todoApp container">
        <h2 className="center blue-text">ToDo List </h2>
        <Todos todos={this.state.todos} deleteItem={this.deleteItem} />
        <AddTodo addItem={this.addItem} />
      </div>
    );
  }
}
export default App;
