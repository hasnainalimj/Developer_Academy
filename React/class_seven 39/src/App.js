import React from "react";
import "./App.css";

//Components
import List from "./Components/List";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      todoName: "",
      isEdit: false,
      activeIndex: "",
      searchBox: ""
    };
  }

  addTodo = () => {
    let { todo, todoName } = this.state;
    todo.push(todoName);
    this.setState({
      todo,
      todoName: ""
    });
  };

  editTodo = () => {
    let { todo, todoName, activeIndex } = this.state;
    todo.splice(activeIndex, 1, todoName);
    this.setState({
      todo,
      isEdit: false
    });
  };

  deleteTodo = () => {
    let { todo, activeIndex } = this.state;
    todo.splice(activeIndex, 1);
    this.setState({
      todo
    });
  };

  getItem = item => {
    alert(iteml);
  };

  render() {
    const { todo, isEdit, activeIndex, todoName, searchBox } = this.state;
    return (
      <div>
        <List getItem={this.getItem} />
        {/* <InputBox
          handler={e => this.setState({ searchBox: e.currentTarget.value })}
          value={searchBox}
        /> */}
        {/* <input
          type="text"
          value={todoName}
          onChange={e => this.setState({ todoName: e.currentTarget.value })}
        />
        <button onClick={isEdit ? this.editTodo : this.addTodo}>
          {isEdit ? "Edit" : "Add"}
        </button>

        <ul>
          {todo.map((val, ind) => {
            return (
              <div>
                <li>{val}</li>
                <span>
                  <button
                    onClick={() =>
                      this.setState({
                        isEdit: true,
                        activeIndex: ind,
                        todoName: val
                      })
                    }
                  >
                    Edit
                  </button>
                  <button onClick={this.deleteTodo}>Delete</button>
                </span>
              </div>
            );
          })}
        </ul> */}
      </div>
    );
  }
}
