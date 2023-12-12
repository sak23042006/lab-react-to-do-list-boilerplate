import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: " ",
      todolist: [],
    };
  }
  inputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0)
      this.setState({
        input: "",
        todolist: [...this.state.todolist, this.state.input],
      });
  };

  updateItem = (newItem, Index) => {
    //created a copy of my to do list
    let arr = this.state.todolist;
    //update
    arr.splice(Index, 1, newItem);
    //change the state
    this.setState({
      todolist: arr,
    });
  };

  deleteItem = (Index) => {
    //created a copy of my to do list
    let arr = this.state.todolist;
    arr.splice(Index, 1);
    //change the state
    this.setState({
      todolist: arr,
    });
  };

  componentDidUpdate() {
    console.log(this.state.todolist);
  }
  render() {
    return (
      <>
        <h1>TO DO LIST </h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.input}
            className="input"
          />
          <button className="btn"> ADD </button>
        </form>
        <p> My Input : {this.state.input}</p>

        <div className="todolist">
          <h2>L I S T</h2>
          {this.state.todolist.length==0 ? (
          <h4>LIST IS EMPTY</h4>
          ) : (
            this.state.todolist.map((e, i) => {
            return (
            <TodoItem
            e={e} 
            i={i} 
            deleteItem={this.deleteItem} 
            updateItem={this.updateItem} 
            />
            ) 
          })
          )}
        </div>
      </>
    );
  }
}
